mainApp.controller("studentController", function($scope) {
   $scope.student = {
        firstName: "Pavan",
        lastName: "Solanke",
        fullName: function() {
          var studentObject;
          studentObject = $scope.student;
          return studentObject.firstName + " " + studentObject.lastName;
        }
      };
});