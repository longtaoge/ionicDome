

angular.module('popover', ['ionic'])

.controller('HeaderCtrl', function($scope, $ionicPopover) {


      $ionicPopover.fromTemplateUrl('popover.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });
        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };


        $ionicPopover.fromTemplateUrl('popover2.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover2 = popover;
        });

        $scope.openPopover2 = function($event) {

            $scope.popover2.show($event);
        };

})

.controller('PlatformCtrl', function($scope, $ionicPopover) {

  $scope.setPlatform = function(p) {
    document.body.classList.remove('platform-ios');
    document.body.classList.remove('platform-android');
    document.body.classList.add('platform-' + p);
  };

});
