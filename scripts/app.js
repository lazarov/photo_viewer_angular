angular.module('photos', ['ngAnimate'])
  .controller('MCtrl', function ($scope) {
    $scope.photos = [
      {image: 'photos/img00.jpg', description: 'Image 00'},
      {image: 'photos/img01.jpg', description: 'Image 01'},
      {image: 'photos/img02.jpg', description: 'Image 02'}
    ];
});
