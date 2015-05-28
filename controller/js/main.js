function studentController($scope) {
      $scope.student = {
        firstName: "Pavan",
        midleName:"laxmanrao",
        lastName: "Solanke",
        fullName: function() {
          var studentObject;
          studentObject = $scope.student;
          return studentObject.firstName + " " + studentObject.midleName + " " + studentObject.lastName;
        }
      };
    }