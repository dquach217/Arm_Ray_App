'use strict';

(function () {
	//Declare module dependencies.
	angular.module('app', ['ui.router']);
})();;
(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider,$locationProvider) {
            console.log("inside router");
            $urlRouterProvider.otherwise("/");
            
            $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
            });
            
            $stateProvider
              .state('login', {
                  url: "/",
                  templateUrl: "/views/login.html",
                  controller:"LoginCtrl"   
              }, function(){
                console.log("Inside of login route");
              })

              .state('dashboard', {
                  url: "/dashboard",
                  templateUrl: "/views/dashboard.html",
                  controller:"DashboardCtrl"   
              })
              .state('project', {
                  url: "/project",
                  templateUrl: "/views/project.html",
                  controller:"ProjectCtrl"   
              })
              .state('profile', {
                  url: "/profile",
                  templateUrl: "/views/profile.html",
                  controller:"ProfileCtrl"   
              })


        }]);
})();;(function () {
    'use strict';

    angular.module('app').controller('DashboardCtrl', ['$scope', function ($scope) {
        console.log("DashboardCtrl functional!");





    }]);
})();;(function () {
    'use strict';

    angular.module('app').controller('LoginCtrl', ['$scope','LoginFactory' ,function ($scope,LoginFactory) {
        console.log("LoginCtrl functional!");

        $scope.username = '';
        $scope.password = '';

        $scope.login = function(){
        	var user = {
        		username:$scope.username,
        		password:$scope.password
        	}

        	//login service sends the user object with username and password
        	// it expects a full user object back, and injects it into the next view
        	LoginFactory.save(user,function(data){
            console.log("data successfully saved")
            console.log(data);
            if(data.user._id){
                console.log('user id is not blank');
                // $state.go('admin',{data:user});
                $state.go('dashboard',{data:data.user});
              }
            },
            function(){
            	//There can be a toast popup here
				console.log('there was an error');     
            }
          )
        }

        
    }]);
})();;(function () {
    'use strict';

    angular.module('app').controller('MainCtrl', ['$scope', function ($scope) {
        console.log("MainCtrl functional!");





    }]);
})();;(function () {
    'use strict';

    angular.module('app').controller('NavbarCtrl', ['$scope', '$http', 'ProfileService', function ($scope,$http,ProfileService) {
        console.log("NavbarCtrl functional!");

        //Get profile information from profile service
        //profile service stores pre-queried information into
        //a promise object and returns it into any view that then calls that
        //promise service

       	var profileInfo = {};
       	ProfileService.getProfileInfo().then(
        	function(data){
            profileInfo = data
          });
    }]);
})();;(function () {
    'use strict';

    angular.module('app').controller('ProfileCtrl', ['$scope', function ($scope) {
        console.log("ProfileCtrl functional!");





    }]);
})();;(function () {
    'use strict';

    angular.module('app').controller('ProjectCtrl', ['$scope', function ($scope) {
        console.log("ProjectCtrl functional!");





    }]);
})();;
(function () {
    'use strict';

    angular.module('app').directive('navbar', function() {
        console.log("navBar directive!");

        	return{
        		restrict: 'E',
        		templateUrl: '/views/NavbarTemplate.html',
        		controller: 'NavbarCtrl'
        	}


    });	
})();;(function () {
    'use strict';

    angular.module('app').factory('LoginFactory', ['$http','$resource', function($http, $resource) {
        console.log('login resource');
        return $resource('some/url/here');
}])	
})();;    
(function () {
    'use strict';

    angular.module('app').factory('ProfileService', ['$http','$q', function($http, $q) {
    var profile = {};
    var requestfailed = true;
    var promise = undefined;
    return {
        getProfileInfo: function() {
            if(!promise || requestfailed) {
                promise = $http.get('/some/url/for/profile/data').then(
                function(response) {
                    requestfailed = false;
                    profile = response.data;
                    return profile;
                },function(response) {  // error
                    requestfailed = true;
                    return $q.reject(response);
                });
            }
            return promise;
        },
    };
}])	
})();