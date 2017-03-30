'use strict';
var app = angular.module('SampleApp',[]);
app.controller('TestControl',['$scope','$state','$http', function($scope,$state,$http){
	$scope.UserDetails = {
		User_FirstName : "",
		User_LastName: "",
		User_Mailid: "",
		User_Password: "",
		User_Number: ""

	};

	$scope.LoogedUserDetail = {
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
		document.location.href = 'modules/Sample/Client/Views/landingpage.html';
	};

	$scope.submitDetails = function(UserDetails)
	{
		console.log($scope.UserDetails);	
		$http.post('/api/Register',$scope.UserDetails).success(function(response){
			document.location.href = 'modules/Sample/Client/Views/landingpage.html';
			alert(response);
		}).error(function(response){
			alert("Error");
		});

	};


	$scope.login = function(){
		//console.log("test");
		$http.post('/api/Login',$scope.login_Details).success(function(response){
			$scope.LoogedUserDetail = response;
			document.location.href = 'modules/Sample/Client/Views/landingpage.html';
			alert(response);
		}).error(function(response){
			alert(response);
		});
	};

	$scope.deleteDetails = function(){
		$http.put('/api/Delete').success(function(response){

		}).error(function(response){

		});
	};


	$scope.upDateDetails = function(){
		$http.put('/api/Update').success(function(response){
		}).error(function(response){

		});
	};

}]);