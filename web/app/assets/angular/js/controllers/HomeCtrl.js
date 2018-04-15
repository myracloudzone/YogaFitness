var HomeCtrl = GMApp.controller('HomeCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', function($scope, $rootScope, $stateParams,  $filter, $state, $location){
    $scope.init = function() {
        $('#homeCarousel').carousel({
            interval:5000,
            pause: "false"
        });
    }
    $scope.init();
}])
