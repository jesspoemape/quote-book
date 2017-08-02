angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {
    $scope.quotes = dataService.getQuotes();
    $scope.addQuote = function() {
        let newQuote = {
            text: $scope.text,
            author: $scope.author
        };
        dataService.addData(newQuote);
    }
    $scope.removeQuote = function(text){
        dataService.removeData(text)
    }
})