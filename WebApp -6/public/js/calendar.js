(function(ref){
    angular.module('app', ['firebase'])
    
    .controller('mainCtrl', function($scope, $firebase){
      var vm = this;
      //connect to firebase
      var firebase = $firebase(new Firebase("https://gres-garage-firebase.firebaseio.com/days"));
      
      //create function reset 
      vm.reset = function(){
        //set data to the service 
        firebase.$set({
          moday : {
            name : 'Monday',
            slots : {
              0700 : {
                time : '7:00am',
                booked : false
              },
              0800 : {
                time : '8:00am',
                booked : false
              },
              0900 : {
                time : '9:00am',
                booked : false
              }
            }
          }
        });
      };
    });
    //sync object
    var syncObject = firebase.$asObject();
    
    //binding data
    syncObject.$bindTo($scope, 'days');
    
  })