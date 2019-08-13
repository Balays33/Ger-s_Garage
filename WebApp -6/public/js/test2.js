function test2(){

    console.log('send data up');
// Add a new document in collection "cities"
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

}


// update service status

function updatestatus() {
    console.log('update status');
    var ServicestatusUpdate = document.getElementById("validationServer11").value;
    console.log(ServicestatusUpdate);
    var cutomerEmailG = document.getElementById("CustomerEmail").value;
    console.log(cutomerEmailG);

    db.collection('servicetime').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log("get cutomer personal details");
            console.log(doc.data());
            console.log(doc.id);
            var userid = doc.id;
            console.log(userid);
            if (doc.data().CustomerEmail == cutomerEmailG) {
                console.log("-----------------");
                db.collection("servicetime").doc(doc.id).update({
                    Status: ServicestatusUpdate,
                })
                    .then(function () {
                        console.log("Document successfully written!");
                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                    });
             }
        });
    });
}

// get customer personal details

function getCdata(){
    console.log('get customer data');
    var cutomerEmailG = document.getElementById("CustomerEmail").value;
    console.log(cutomerEmailG);
    window.alert("---------------------");
    db.collection('customers').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log("get cutomer personal details");
            
            console.log(doc.data());
            if (doc.data().CustomerEmail == cutomerEmailG) {
                console.log("HHHHHHHHHHHHHHHHHHHHHHHH");
               
               document.getElementById("First-Name").innerHTML = doc.data().CustomerFirstName;               
               document.getElementById("Last-Name").innerHTML = doc.data().CustomerSecondName;
               document.getElementById("Mobile-number").innerHTML = doc.data().CustomerMobileNumber;
             }
        });
    });
    }

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
     function getbal(){
        console.log("working itt");
        // on() method
        firebase.database().ref('22').once('value',(snap)=>{
         console.log(snap.val());
         console.log(snap.val().price);
         document.getElementById("json").innerHTML = snap.val().Items;
        });
          
      }
      