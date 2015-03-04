
angular.module('takeAction', ['ionic'])
.controller('ActionSheetCtrl', function($scope, $ionicActionSheet) {
  $scope.messages = [];
  $scope.takeAction = function() {
    $ionicActionSheet.show({
      buttons: [
        { text: '分享 <i class="icon ion-share">' },
        { text: '编辑 <i class="icon ion-edit">' }
      ],
      destructiveText: '删除 <i class="icon ion-trash-b">',
      titleText: '标题',
      cancelText: '取消',
      cancel: function() {
        $scope.message('取消');
        return true;
      },
      buttonClicked: function(index) {
        $scope.message(index === 0 ? '分享' : '编辑');
        return true;
      },
      destructiveButtonClicked: function() {
        $scope.message('删除');
        return true;
      }
    });
  };
  $scope.message = function(msg) {
    $scope.messages.unshift({
      text: '你按下的按钮是： ' + msg
    });
  };
});
