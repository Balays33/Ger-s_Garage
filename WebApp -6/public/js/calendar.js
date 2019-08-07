// Initialize Firebase
var config = {
    apiKey: "AIzaSyA_MvxhxRgubmZXleweD6tFG1UCP89tjis",
    authDomain: "gres-garage-firebase.firebaseapp.com",
    databaseURL: "https://gres-garage-firebase.firebaseio.com",
    projectId: "gres-garage-firebase",
    storageBucket: "gres-garage-firebase.appspot.com",
    messagingSenderId: "979259985070",
    appId: "1:979259985070:web:acaece0ce407193e"
  };
  firebase.initializeApp(config);
    

    var database = firebase.database();


    //There are two main ways to get data from the database, but for now we are going to focus on .once. Use this if you want to pull from the database just one time.
    database.ref('/').once('value', function(snapshot){
      console.log(snapshot.val());
    });
    //The database will listen at the root directory, which is done with .ref('/'). Below is another way to declare the .ref.
    var rootRef = database.ref('/');
    
    rootRef.once('value', function(snapshot){
      console.log(snapshot.val());
      
    });
    
    function pushData(){
      var data = document.getElementById("dataValue").value;
      var dataRef = database.ref('/pushData').push();
      dataRef.set({
        value: data
      });
    }
    
    function setData(){
      var data = document.getElementById("dataValue").value;
      var dataRef = database.ref('/setData');
      console.log(data)
      dataRef.set({
        value: data
      });
    }
    
    setDataRef = database.ref("/setData");
    setDataRef.on('child_changed', function(snapshot) {
      console.log("Below is the data from child_changed");
      console.log(snapshot.val());
    });
    
    pushDataRef = database.ref("/pushData");
    pushDataRef.on("child_added", function(snapshot){
      console.log("Below is the data from child_added");
      console.log(snapshot.val());
    });
    
    database.ref('/pushData').once('value', function(snapshot){
      snapshot.forEach(function(data){
        console.log("Below are the child keys of the values in 'pushData'")
        console.log(data.key);
      });
      console.log(Object.keys(snapshot.val()));
    });

    function setbal(){
        console.log("working");
        var data = document.getElementById("up").value;
        console.log(data);
        var dataRef = database.ref('/balaz').push();
        dataRef.set({
          value: data
        });
      }

      function getbal(){
        console.log("working itt");
        // on() method
        firebase.database().ref('setData').once('value',(snap)=>{
         console.log(snap.val());
         document.getElementById("json").innerHTML = snap.val().value;
        });
          
      }