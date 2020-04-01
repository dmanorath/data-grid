function DGrid(selector) {
    const self = {
        element: document.querySelector(selector),
        //event handler
        on: (event, callback) => {
            document.addEventListener(event, callback);
        },
        //grid
        Grid: (columnNames, rowData) => {
            // document.querySelector(selector).style.height = "400px";
            // document.querySelector(selector).style.overflow = "auto";

            //get column count
            var columnCount = columnNames.length;
            var rowCount = rowData.length;

            var gridWrap = document.createElement('div');
            gridWrap.setAttribute("class", "md-grid");

            var tableWrap = document.createElement('table');
            tableWrap.setAttribute("class", "md-grid-table")

            //grid header def
            var tableHeader = document.createElement('thead');
            tableHeader.setAttribute("class", "md-grid-header");

            //grid body def
            var tableBody = document.createElement('tbody');
            tableBody.setAttribute("class", "md-grid-body");

            //append header
            var tableHeadTr = document.createElement('tr');
            for (var i = 0; i < columnCount; i++) {
                var tableTd = document.createElement("th");
                tableTd.setAttribute("class", "md-grid-col md-grid-col-" + i);
                var cell = document.createTextNode(columnNames[i]["headerName"]);
                tableTd.appendChild(cell);
                //append td to tr
                tableHeadTr.appendChild(tableTd);
            }
            tableHeader.appendChild(tableHeadTr);
            tableWrap.appendChild(tableHeader);

            //append rows
            for (var i = 0; i < rowCount; i++) {
                var tableTr = document.createElement('tr');
                tableTr.setAttribute("class", "md-grid-row md-grid-rowId-" + i);

                var colCounter = 0;
                for (var prop in rowData[i]) {
                    var tableTd = document.createElement("td");
                    tableTd.setAttribute("class", "md-grid-col md-grid-col-" + colCounter)
                    var cell = document.createTextNode(rowData[i][prop]);
                    tableTd.appendChild(cell);
                    //append td to tr
                    tableTr.appendChild(tableTd);

                    colCounter += 1;
                }
                tableBody.appendChild(tableTr);
            }

            tableWrap.appendChild(tableBody);

            //display full grid inside unique id
            gridWrap.appendChild(tableWrap);
            document.querySelector(selector).appendChild(gridWrap);

            var gridOffset = document.querySelector(selector).offsetTop;
            // document.querySelector(".md-grid-header .md-grid-col").style.top = gridOffset + "px";

        }
    }

    return self;
}