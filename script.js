

var clearButtonEl = $("#clearResults");
var searchEl = $("#search");
var numberEl = $("#number");
var startEl = $("#start");
var endEl = $("#end");
var lookUpEl = $("#lookUp");

clearButtonEl.on("click", function() {
    searchEl.text("");
    numberEl.text("");
    startEl.text("");
    endhEl.text("");
});

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";

queryURL = queryURL + $("searchEl").text();

if ($("startEl").text() != "") {
    queryURL + "&begin_date=" + $("startEl").text();
}

if ($("endEl").text() != "") {
    queryURL + "&end_date=" + $("endEl").text();
}

queryURl = queryURL + "&page=0&api-key=53xAdSWxtm2C5RK9n5EE0DCzA0EKGjAG"

lookUpEl.on("click", function() {
    
    






    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {



});




