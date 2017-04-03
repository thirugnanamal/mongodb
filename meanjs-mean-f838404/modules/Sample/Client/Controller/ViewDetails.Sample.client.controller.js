'use strict';

angular.module('SampleApp').controller('LandingPageControl',['$scope','$state','$http', function($scope,$state,$http){

	$scope.LoogedUserDetail = {
		User_FirstName : "",
		User_LastName: "",
		User_Mailid: "",
		User_Password: "",
		User_Number: ""		
	};

	$scope.updateField = true;

	console.log($state.params.obj);
	$scope.LoogedUserDetail = $state.params.obj;

	$scope.updateClick = function(){
		$scope.updateField = false;
	};


	$scope.deleteDetails = function(){
		console.log($scope.LoogedUserDetail.User_Mailid);
		$http.post('/api/Delete',$scope.LoogedUserDetail).success(function(response){
			$state.go('home');
			alert("User deleted");
		}).error(function(response){

		});
	};


	$scope.upDateDetails = function(){
		$http.post('/api/Update',$scope.LoogedUserDetail).success(function(response){
			console.log("Updated");
			alert("Details Updated");
		}).error(function(response){

		});
	};


}]);