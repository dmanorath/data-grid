$(document).ready(function () {
    //call grid
    var columnDefsAPI = [{
            headerName: "UserId",
            field: "userId",
            sortable: true,
            colWidth: "100px"
        },
        {
            headerName: "Id",
            field: "id",
            colType: "link",
            callLink: "https://www.mrdhakal.com/test/id/",
            callLinkParam: "id",
            searchable: false,
            sortable: true,
            colWidth: "100px"
        },
        {
            headerName: "Title",
            field: "title",
            sortable: true,
            colWidth: "160px",
            searchable: true,
            // colType: "dateTime",
        },
        {
            headerName: "Body",
            field: "body",
            colWidth: "160px",
            // colType: "date",
            sortable: true,
        },
    ];

    // var rowDataAPI = [];
    $.ajax("https://jsonplaceholder.typicode.com/posts")
        .done(function (data) {
            // rowDataAPI = data;
            DGrid("#grid-apitest").Grid(columnDefsAPI, data, "default", "scroll");
            console.log("success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });

});