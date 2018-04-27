var TeamCtrl = GMApp.controller('TeamCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', function($scope, $rootScope, $stateParams,  $filter, $state, $location){
    $scope.memberId = null;
    $scope.closeDetail = function() {
        $scope.memberId = null;
    }
               
}]);