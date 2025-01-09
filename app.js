var app = angular.module('ProductApp', []);

app.controller('ProductController', ['$scope', '$http', function ($scope, $http) {
  // Load mock data
  $http.get('mock-data.json').then(function (response) {
    $scope.product = response.data.product;
    $scope.offers = response.data.offers;
    $scope.platforms = response.data.platforms;
  });

  // Popup visibility
  $scope.isOffersVisible = false;
  $scope.isPlatformsVisible = false;

  $scope.showOffers = function () {
    $scope.isOffersVisible = true;
    $scope.isPlatformsVisible = false;
  };

  $scope.showPlatforms = function () {
    $scope.isPlatformsVisible = true;
    $scope.isOffersVisible = false;
  };

  $scope.closePopup = function () {
    $scope.isOffersVisible = false;
    $scope.isPlatformsVisible = false;
  };
}]);
