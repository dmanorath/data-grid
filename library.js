function DGrid(selector) {
  const self = {
    element: document.querySelector(selector),

    dataArrays: {
      _dataArr: [],

      get dataArray() {
        return this._dataArr;
      },
      set dataArray(data) {
        this._dataArr = data;
      }
    },

    //event handler
    on: (event, callback) => {
      document.addEventListener(event, callback);
    },

    //sorting
    SortByColumn: columnIndex => {
      var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
      table = document.querySelector(selector + " table");
      switching = true;
      dir = "asc";
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < rows.length - 1; i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[columnIndex];
          y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchcount++;
        } else {
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    },

    //grid
    Grid: (columnNames, rowData, bgColor) => {
      var templateColor = "md-grid-wrap-default";
      if (bgColor == "default") {
        templateColor = "md-grid-wrap-default";
      }

      self.dataArrays.dataArray = rowData;
      // //sorting
      // SortByColumn: columnName => {
      //   alert(columnName);
      // };

      // document.querySelector(selector).style.height = "400px";
      // document.querySelector(selector).style.overflow = "auto";

      //get column count
      var columnCount = columnNames.length;
      var rowCount = rowData.length;

      var gridWrap = document.createElement("div");
      gridWrap.setAttribute("class", templateColor);

      var tableWrap = document.createElement("table");
      tableWrap.setAttribute("class", "md-grid");

      //grid header def
      var tableHeader = document.createElement("thead");
      tableHeader.setAttribute("class", "md-grid-header");

      var tableHeaderTr = document.createElement("tr");
      tableHeaderTr.setAttribute("class", "md-grid-row");

      //grid body def
      var tableBody = document.createElement("tbody");
      tableBody.setAttribute("class", "md-grid-body");

      //append header
      for (var i = 0; i < columnCount; i++) {
        var tableTd = document.createElement("td");
        tableTd.setAttribute("class", "md-grid-col md-grid-col-" + i);
        var cell = document.createTextNode(columnNames[i]["headerName"]);
        tableTd.setAttribute(
          "onClick",
          "DGrid('" + selector + "').SortByColumn('" + i + "')"
        );
        //tableTd.setAttribute("onClick", "sortTable(" + i + ")");
        tableTd.appendChild(cell);

        //append td to tr
        tableHeaderTr.appendChild(tableTd);
      }
      tableHeader.appendChild(tableHeaderTr);
      tableWrap.appendChild(tableHeader);

      //append rows
      for (var i = 0; i < rowCount; i++) {
        var tableTr = document.createElement("tr");
        tableTr.setAttribute("class", "md-grid-row md-grid-rowId-" + i);

        var colCounter = 0;
        for (var prop in rowData[i]) {
          var tableTd = document.createElement("td");
          tableTd.setAttribute(
            "class",
            "md-grid-col md-grid-col-" + colCounter
          );
          var cell = document.createTextNode(rowData[i][prop]);
          tableTd.appendChild(cell);
          //append td to tr
          tableTr.appendChild(tableTd);

          colCounter += 1;
        }
        tableBody.appendChild(tableTr);
      }

      tableWrap.appendChild(tableBody);
      gridWrap.appendChild(tableWrap);

      //display full grid inside unique id
      document.querySelector(selector).appendChild(gridWrap);

      //var gridOffset = document.querySelector(selector).offsetTop;
      // document.querySelector(".md-grid-header .md-grid-col").style.top = gridOffset + "px";
    }
  };

  return self;
}
