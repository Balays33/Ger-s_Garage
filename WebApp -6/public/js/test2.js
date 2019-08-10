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