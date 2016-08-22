var app = angular.module('MTG',[]);

app.controller('MTGController', function ($scope, Card) {
  // Your code here

  $scope.data = {};

  var renderCard = function(){
    Card.fetchCard()
    .then(function(card){
      $scope.data.card = card;
    })
    .catch(function(){
      console.error(error);
    });
  }

  };

app.factory('Card',function($http){

  var fetchCard = function(){
    return $http({
      method:'GET',
      url:'/card'
    })
    .then(function(reponse){
      return response.data;
    });
  };

  return {
    fetchCard: fetchCard
  }

});
