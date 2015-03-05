

angular.module('simple'
  )
.controller('IonicDemoCtrl', function($scope, $ionicModal, $ionicLoading) {

})
.filter('humanize', function() {
  return function(input) {
    return input.charAt(0).toUpperCase() +
      input.substring(1).replace(/[A-Z]/g, function(match, i) {
        return ' ' + match.toUpperCase();
      });
  };
});

