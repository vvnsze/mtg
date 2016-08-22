var app = angular.module('MTG',[]);

app.controller('MTGController', function ($scope, Card) {
  // Your code here

  $scope.data = {};

  $scope.renderCard = function() {
    console.log('renderCard fired in MTGController')
    Card.fetchCard()
    .then(function(card){
      console.log(card);
      $scope.data.card = card.name;
      $scope.data.cardImage = card.imageUrl;
      // console.log('this it the scope card' ,$scope.data.card)
    })
    .catch(function(){
      console.error(error);
    });
  }

});

app.factory('Card',function($http){

  var fetchCard = function(){
    return $http({
      method:'GET',
      url:'/card'
    })
    .then(function(response){
      console.log('response in fetchCard in Card factory:',response)
      return response.data;
    }).catch(function(error){
      console.error("failed to retrieve card properly");
    });
  };

  return {
    fetchCard: fetchCard
  }

});
