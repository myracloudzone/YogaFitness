var HomeCtrl = GMApp.controller('HomeCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', function($scope, $rootScope, $stateParams,  $filter, $state, $location){
     $scope.init = function() {
        $("#demo").scrollForever({
            placeholder: 0,
            dir: 'top',
            container: 'ul',
            inner: 'li',
            speed: 300,
            delayTime: 50,
            continuous: true,
            num: 1
        });
        $('#homeCarousel2').carousel({
            interval:2000,
            pause: "false"
        });
     }    
     $scope.init();             
}]);
