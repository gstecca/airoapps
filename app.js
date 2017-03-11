angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term

  // create the list of sushi rolls
  $scope.sushi = [
    { name: 'Cali Roll', fish: 'Crab', tastiness: 2, link: 'https://www.w3schools.com' },
    { name: 'Philly', fish: 'Tuna', tastiness: 4 , link: 'https://www.w3schools.com' },
    { name: 'Tiger', fish: 'Eel', tastiness: 7, link: 'https://www.w3schools.com'  },
    { name: 'Rainbow', fish: 'Variety', tastiness: 6, link: 'https://www.w3schools.com'  }
  ];


});
