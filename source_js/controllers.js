app.controller('homeController', ['$scope', '$http', function($scope, $http) {

    $http.get('./data/members.json').success(function(data){
        $scope.members = data;
    }).error(function(err){
        console.log(err);
    })
    
}]);

app.controller('toursController', ['$scope', '$http', function($scope, $http) {

}]);

app.controller('edaysController', ['$scope', '$http', function($scope, $http) {

}]);

app.controller('advocatesController', ['$scope', '$http', function($scope, $http) {

    
}]);

app.controller('shadowController', ['$scope', '$http', function($scope, $http) {

 
}]);