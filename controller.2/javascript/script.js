// Code goes here
var mainApp = angular.module("mainApp",[]);

mainApp.controller("Students", function($scope){
  $scope.students = [
  {
    id:'1001', 
    firstName:'Matthew', 
    lastName:'ABC',
    ext:'003',
    doj:new Date("11/Apr/2011"),
  },
  
	{
	  id:'1002', 
	  firstName:'Matthew1', 
	  lastName:'ABC1',
	  ext:'004',
	  doj:new Date("11/Apr/2011"),
	},
	
	{
	  id:'1003', 
	  firstName:'Matthew2', 
	  lastName:'ABC2',
	  ext:'005',
	  doj:new Date("11/Apr/2011"),
	}
]
});
