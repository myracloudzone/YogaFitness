var GalleryCtrl = GMApp.controller('GalleryCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', function($scope, $rootScope, $stateParams,  $filter, $state, $location){
    $scope.init = function() {
        $('#homeCarousel').carousel({
            interval:2000,
            pause: "false"
        });
        setTimeout(function() {
            lightGallery(document.getElementById('lightgallery'));
        }, 2000)
        
    }

    $scope.collection = [
        {src : "/app/assets/angular/images/gallery/1.jpg"},
        {src : "/app/assets/angular/images/gallery/2.jpg"},
        {src : "/app/assets/angular/images/gallery/3.jpg"},
        {src : "/app/assets/angular/images/gallery/4.jpg"},
        {src : "/app/assets/angular/images/gallery/5.jpg"},
        {src : "/app/assets/angular/images/gallery/6.jpg"},
        {src : "/app/assets/angular/images/gallery/7.jpg"},
        {src : "/app/assets/angular/images/gallery/8.jpg"},
        {src : "/app/assets/angular/images/gallery/9.jpg"},
    ];
    $scope.init();
               
}]);