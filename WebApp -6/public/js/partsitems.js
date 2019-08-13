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
  
/*

    //There are two main ways to get data from the database, but for now we are going to focus on .once. Use this if you want to pull from the database just one time.
    database.ref('/').once('value', function(snapshot){
      console.log(snapshot.val());
      printoutItems(snapshot.val());
     // carList.renderItems(snapshot.val());
    });
    //The database will listen at the root directory, which is done with .ref('/'). Below is another way to declare the .ref.
    var rootRef = database.ref('/');
    
    rootRef.once('value', function(snapshot){
      console.log(snapshot.val());
      
    });

    //carList.renderItems(li);
     function printoutItems(){
        console.log("working itt");
        // on() method
        firebase.database().ref('').once('value',(snap)=>{
         console.log(snap.val());
        // document.getElementById("json").innerHTML = snap.val().value;
        });
          
      }

      */
const servicelist = document.querySelector('#Items-list');


function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

 
// create element & render customer data

function renderItems(doc){
    console.log(doc);
    let li = document.createElement('li');
    let number = document.createElement('span');
    let item = document.createElement('span');
    let price = document.createElement('span');
    

    li.setAttribute('data-id', doc.id);
    number.textContent = doc.number;
    item.textContent = doc.Items;
    price.textContent = doc.price;
    

   
   
    li.appendChild(number);
    li.appendChild(item);
    li.appendChild(price);
    

    servicelist.appendChild(li);
   
}

 


// getting data
/*
db.collection('servicetime').get().then(snapshot => {
    //console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        renderCar(doc);
    });
});
*/

/*
// real-time listener  to servicetime
db.collection('servicetime').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderCar(change.doc);
        } else if (change.type == 'removed'){
            let li = carList.querySelector('[data-id=' + change.doc.id + ']');
            carList.removeChild(li);
        }
    });
});

// real-time listener  to Vehicle
db.collection('Vehicle').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderCar(change.doc);
        } else if (change.type == 'removed'){
            let li = carList.querySelector('[data-id=' + change.doc.id + ']');
            carList.removeChild(li);
        }
    });
});

*/
/*
// real-time listener  to customers
database.ref('/').once('value').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderServicetime(change.doc);
        } else if (change.type == 'removed'){
            let li = carList.querySelector('[data-id=' + change.doc.id + ']');
            //carList.removeChild(li);
        }
    });
});
*/

database.ref('/').once('value', function(snapshot){
    console.log(snapshot.val());
    if (snapshot.val() == "setData"){
        console.log("HHHHH");
    }
  });
  
  var i;
function getparts() {
    console.log("working itt");
    // on() method
    for (i = 0; i < 100; i++) {
        
        firebase.database().ref(i).once('value', (snap) => {
            console.log(snap.val());
            renderItems(snap.val());
            //console.log(snap.val().Items);
            //document.getElementById("json").innerHTML = snap.val().Items;
        });
    }
}