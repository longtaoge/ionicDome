

angular.module('popover', ['ionic'])

.controller('HeaderCtrl', function($scope, $ionicPopover) {

/*
  $scope.openPopover = function($event) {
      alert("openPopover");
    $scope.popover.show($event);
  };
  $ionicPopover.fromTemplateUrl('popover.html', function(popover) {
    $scope.popover = popover;
  });

*/



        var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });

        // .fromTemplateUrl() method
        $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });



        var template = '<ion-popover-view><ion-header-bar> <h1 class="title">弹出窗口标题 Title</h1> </ion-header-bar> <ion-content> 弹出窗口内容! </ion-content></ion-popover-view>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope,
        });

        // .fromTemplateUrl() method
        $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope,
        }).then(function(popover) {
            $scope.popover = popover;
        });


        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
        // Execute action on hide popover
        $scope.$on('popover.hidden', function() {
            // Execute action
        });
        // Execute action on remove popover
        $scope.$on('popover.removed', function() {
            // Execute action
        });


  $scope.openPopover2 = function($event) {
      alert("openPopover2");
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
