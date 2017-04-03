'use strict';

angular.module('SampleApp').controller('TestControl',['$scope','$state','$http', function($scope,$state,$http){

	$scope.UserDetails = {
		User_FirstName : "",
		User_LastName: "",
		User_Mailid: "",
		User_Password: "",
		User_Number: ""

	};

	
	$scope.login_Details = {
		User_Name: "",
		User_Password: ""
	};

	$scope.registerPage = function(){
		$state.go('reg' , {});
	};

	$scope.submitDetails = function(UserDetails){
		console.log($scope.UserDetails);	
		$http.post('/api/Register',$scope.UserDetails).success(function(response){
			$state.go('LandingPage',{obj: response});
		}).error(function(response){
			alert("Error");
		});

	};


	$scope.login = function(){
		$http.post('/api/Login',$scope.login_Details).success(function(response){
			if(response === "Register to login"){
				alert(response);
			}else if(response === "Password wrong"){
				alert(response);
			}
			else{
				$state.go('LandingPage',{obj: response});
			}
		}).error(function(response){
			alert(response);
		});
	};


}]);