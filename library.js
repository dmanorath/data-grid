/*************************
Author: Manorath Dhakal
Author URL: https://www.mrdhakal.com
Project URL: https://projects.mrdhakal.com/
Description: JS Plugin for md-grid
*************************/

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
      },
    },

    //event handler
    on: (event, callback) => {
      document.addEventListener(event, callback);
    },

    //sorting
    SortByColumn: (columnIndex) => {
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
            var temphtmlX = x.innerHTML;
            var temphtmlY = y.innerHTML;
            if (
              temphtmlX.replace(/<[^>]*>/g, "").toLowerCase() >
              temphtmlY.replace(/<[^>]*>/g, "").toLowerCase()
            ) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            var temphtmlX = x.innerHTML;
            var temphtmlY = y.innerHTML;
            if (
              temphtmlX.replace(/<[^>]*>/g, "").toLowerCase() <
              temphtmlY.replace(/<[^>]*>/g, "").toLowerCase()
            ) {
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

    //column search
    SearchColumn: (columnIndex) => {
      var input, filter, table, rows, td, i, txtValue;
      input = document.querySelector(selector+" .md-grid-header-col-search-input");
      filter = input.value.toUpperCase();
      table = document.querySelector(selector + " tbody");
      rows = table.rows;
      for (i = 0; i < rows.length; i++) {
        td = rows[i].getElementsByTagName("td")[columnIndex];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            rows[i].style.display = "";
          } else {
            rows[i].style.display = "none";
          }
        }       
      }
    },

    //grid
    Grid: (columnNames, rowData, bgColor) => {
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      var templateColor = "md-grid-wrap-default";
      if (bgColor === "default") {
        templateColor = "md-grid-wrap-default";
      }else if(bgColor === "noborder") {
        templateColor = "md-grid-wrap-noborder";
      }

      //get column field names only into array
      var columnFileds = [];

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

      //append column header
      for (var i = 0; i < columnCount; i++) {
        columnFileds.push(columnNames[i]["field"]);

        var tableTd = document.createElement("td");
        tableTd.setAttribute("class", "md-grid-col md-grid-col-" + i);
        var tdSpan = document.createElement("span");
        var cell = document.createTextNode(columnNames[i]["headerName"]);

        //check if column is sortable
        if (columnNames[i]["sortable"] === true) {
          tdSpan.setAttribute(
            "onClick",
            "DGrid('" + selector + "').SortByColumn('" + i + "')"
          );
          tdSpan.setAttribute("class", "md-grid-header-col-name md-grid-header-col-name-sortable");
        }
        else{
          tdSpan.setAttribute("class", "md-grid-header-col-name");
        }
        tdSpan.appendChild(cell);
        tableTd.appendChild(tdSpan);

        //check if column is searchable
        var createSearchForm = document.createElement("input");
        if (columnNames[i]["searchable"] === true) {
          createSearchForm.type = "text";
          createSearchForm.setAttribute(
            "class",
            "md-grid-header-col-search-input"
          );
          createSearchForm.setAttribute(
            "onChange",
            "DGrid('" + selector + "').SearchColumn('" + i + "')"
          );
          tableTd.appendChild(createSearchForm);
        }

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
          if (columnFileds.includes(prop)) {
            var tableTd = document.createElement("td");

            //add custom column width
            if (columnNames[colCounter]["colWidth"]) {
              tableTd.setAttribute(
                "width",
                columnNames[colCounter]["colWidth"]
              );
            }

            tableTd.setAttribute(
              "class",
              "md-grid-col md-grid-col-" + colCounter
            );

            var cell = document.createTextNode(rowData[i][prop]);

            //check if coltype is link
            var anchor = document.createElement("a");
            if (columnDefs[colCounter]["colType"] === "link") {
              anchor.href =
                columnDefs[colCounter]["callLink"] +
                rowData[i][columnDefs[colCounter]["callLinkParam"]];
              anchor.setAttribute("target", "_blank");
              anchor.appendChild(cell);
              tableTd.appendChild(anchor);
            }

            //convert date
            else if (columnNames[colCounter]["colType"] === "date") {
              var tempDate = new Date(rowData[i][prop]);
              var tempDateFormat =
                months[tempDate.getMonth() - 1] +
                " " +
                tempDate.getDate() +
                ", " +
                tempDate.getFullYear();
              cell = document.createTextNode(tempDateFormat);
              tableTd.appendChild(cell);
            } else if (columnNames[colCounter]["colType"] === "dateTime") {
              var tempDate = new Date(rowData[i][prop]);
              var tempDateFormat =
                months[tempDate.getMonth() - 1] +
                " " +
                tempDate.getDate() +
                ", " +
                tempDate.getFullYear() +
                " " +
                tempDate.getHours() +
                ":" +
                tempDate.getMinutes() +
                ":" +
                tempDate.getSeconds();
              cell = document.createTextNode(tempDateFormat);
              tableTd.appendChild(cell);
            } else if (columnNames[colCounter]["colType"] === "image") {
              var tempImg = document.createElement("img");
              tempImg.src = rowData[i][prop];
              tempImg.setAttribute("height", "20px");
              cell = tempImg;
              tableTd.appendChild(cell);
            } else {
              tableTd.appendChild(cell);
            }
            //append td to tr
            tableTr.appendChild(tableTd);

            colCounter += 1;
          }
        }
        tableBody.appendChild(tableTr);
      }

      tableWrap.appendChild(tableBody);
      gridWrap.appendChild(tableWrap);

      //display full grid inside unique id

      if (gridWrap === null) {
      } else {
        document.querySelector(selector).appendChild(gridWrap);
      }

      //var gridOffset = document.querySelector(selector).offsetTop;
      // document.querySelector(".md-grid-header .md-grid-col").style.top = gridOffset + "px";
    },
  };

  return self;
}
