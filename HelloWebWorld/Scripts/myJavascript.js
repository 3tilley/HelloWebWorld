$(document).ready(function () {
    myApp.helloWorldWireup();
});

var myApp = {

    helloWorldWireup: function () {
        $("#makeRequest").click(function (event) {

            var nm = $("#userName").val();
            var dt = $("#reqDate").val();
            var myData = {
                UserName: nm,
                RequestedDate: dt
            };
            $.ajax({
                type: "GET",
                url: "/Home/GetMessage",
                data: myData,
                contentType: "application/json",
                success: myApp.processResult
            });
        });
    },

    processResult: function (returnedData) {
        $("#outputSection section").remove();
        myApp.displayResult(
            "User Name",
            returnedData.UserName);
        myApp.displayResult(
            "Request Updated",
            returnedData.RequestedDate);
        myApp.displayResult(
            "Server Time",
            returnedData.ServerDate);
    },

    displayResult: function (label, value) {
        var start = "<section class='result'><label>";
        var mid = "</label><span>";
        var end = "</span></section>";
        $("#outputSection")
            .append(start + label + mid + value + end);
    }
}