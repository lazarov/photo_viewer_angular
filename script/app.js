angular.module('photos', ['ngAnimate'])
  .controller('MCtrl', function ($scope) {
    $scope.photos = [
      {image: 'photos/img00.jpg', description: 'Image 00'},
      {image: 'photos/img01.jpg', description: 'Image 01'},
      {image: 'photos/img02.jpg', description: 'Image 02'},
      {image: 'photos/img03.jpg', description: 'Image 03'},
      {image: 'photos/img04.jpg', description: 'Image 04'},
      {image: 'photos/img05.jpg', description: 'Image 05'},
      {image: 'photos/img06.jpg', description: 'Image 06'}
    ];

    $scope.currentIndex = 0;
    $scope.setCurrentPhotoIndex = function (index) {
      $scope.currentIndex = index;
    };
    $scope.isCurrentPhotoIndex = function (index) {
      return $scope.currentIndex === index;
    };
    $scope.prevPhoto = function () {
      $scope.currentIndex = ($scope.currentIndex < $scope.photos.length -1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextPhoto = function () {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.photos.length - 1;
    };
});
