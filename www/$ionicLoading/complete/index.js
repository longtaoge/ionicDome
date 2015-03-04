
angular.module('complete', ['ionic'])
.controller('LoadingCtrl', function($scope, $ionicLoading) {
  $scope.loadingOptions = {
    duration: 1000,
    delay: 0,
    template: '<i class="icon ion-loading-c"></i>\n<br/>\n正在加载...',
    noBackdrop: false
  };
  $scope.showLoading = function() {
    $ionicLoading.show($scope.loadingOptions);
  };
});
