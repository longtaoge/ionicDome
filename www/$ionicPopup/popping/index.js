angular.module('popping', ['ionic'])
    .controller('PopupCtrl', function ($scope, $timeout, $q, $ionicPopup) {
        $scope.showPopup = function () {
            $scope.data = {}

            $ionicPopup.show({
                templateUrl: 'popup-template.html',
                title: '输入 上网  密码',
                subTitle: '请注意周边环境，防止密码被盗',
                scope: $scope,
                buttons: [
                    {
                        text: '取消', onTap: function (e) {
                        return true;
                    }
                    },
                    {
                        text: '<b>保存</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            return $scope.data.wifi;
                        }
                    }
                ]
            }).then(function (res) {
                console.log('Tapped!', res);
            }, function (err) {
                console.log('Err:', err);
            }, function (msg) {
                console.log('message:', msg);
            });

            $timeout(function () {
                $ionicPopup.confirm({
                    title: '超时了，你在吃冰糕吗?',
                    cancelText: '没有',
                    okText: '是的'
                }).then(function (res) {
                    console.log('Your love for ice cream:', res);
                });
            }, 5000);
        };

        $scope.showConfirm = function () {
            $ionicPopup.confirm({
                title: '定制冰糕',
                content: '你真的要这种口味的冰糕吗?',

                buttons: [
                    {
                        text: '取消', onTap: function (e) {
                        return true;
                    }
                    },
                    {
                        text: '<b>确定</b>',

                        onTap: function (e) {
                            return true;
                        }
                    }
                ]
            }).then(function (res) {
                if (res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        };
        $scope.showPrompt = function () {
            $ionicPopup.prompt({
                title: '标题',
                subTitle: '副标题',

                buttons: [
                    {
                        text: '取消', onTap: function (e) {
                        return true;
                    }
                    },
                    {
                        text: '<b>确定</b>',

                        onTap: function (e) {
                            return true;
                        }
                    }
                ]
            }).then(function (res) {
                console.log('', res);
            });
        };
        $scope.showPasswordPrompt = function () {
            $ionicPopup.prompt({
                title: '密码确认',
                subTitle: '请输入您的解锁密码',
                inputType: 'password',
                inputPlaceholder: '请输入您的密码'


            }).then(function (res) {
                console.log(' ', res);
            });
        };
        $scope.showAlert = function () {
            $ionicPopup.alert({
                title: '保存',
                content: '您的数据已经保存!'

            }).then(function (res) {
                    console.log(' 您的数据已经保存!');
                }, function (err) {
                },
                function (popup) {
                    console.log('Got popup', popup);
                    $timeout(function () {
                        popup.close();
                    }, 1000);
                });
        };
    });
