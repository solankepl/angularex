 function studentController($scope) {
      $scope.student = {
        firstName: "Arun",
        lastName: "James",
        marks: 85,
        subjects: [{
          name: 'Physics',
          marks: 70
        }, {
          name: 'Chemistry',
          marks: 80
        }, {
          name: 'Math',
          marks: 65
        }],
        fullName: function() {
          var studentObject;
          studentObject = $scope.student;
          return studentObject.firstName + " " + studentObject.lastName;
        }
      };
    }