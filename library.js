function DGrid(selector) {
    const self = {
        element: document.querySelector(selector),
        //event handler
        on: (event, callback) => {
            document.addEventListener(event, callback);
        },
        //grid
        Grid: (columnNames, rowData) => {
            //get column count
            var columnCount = columnNames.length;
            var rowCount = rowData.length;
            var tableWrap = document.createElement('div');
            tableWrap.setAttribute("class", "md-grid")
            
            //grid header def
            tableHeader = document.createElement('div');
            tableHeader.setAttribute("class", "md-grid-header");

            //grid body def
            tableBody = document.createElement('div');
            tableBody.setAttribute("class", "md-grid-body");

            //append header
            for(var i = 0; i < columnCount; i++){
                var tableTd = document.createElement("div");
                tableTd.setAttribute("class", "md-grid-col md-grid-col-"+i);
                var cell = document.createTextNode(columnNames[i]["headerName"]);
                tableTd.appendChild(cell);
                //append td to tr
                tableHeader.appendChild(tableTd);
            }
            tableWrap.appendChild(tableHeader);

            //append rows
            for(var i = 0; i < rowCount; i++) {
                var tableTr = document.createElement('div');
                tableTr.setAttribute("class", "md-grid-row md-grid-rowId-" + i);

                var colCounter = 0;
                for(var prop in rowData[i]) {
                    var tableTd = document.createElement("div");
                    tableTd.setAttribute("class", "md-grid-col md-grid-col-"+colCounter)
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
            document.querySelector(selector).appendChild(tableWrap);
        }
    }

    return self;
}