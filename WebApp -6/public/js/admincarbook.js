

const servicelist = document.querySelector('#cutomer-list');
const test = document.querySelector("#test");


// create element & render customer data
function renderServicetime(doc){
    let li = document.createElement('li');
    let Status = document.createElement('span');
    let CustomerEmail = document.createElement('span');
    let BookingServicetype = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    Status.textContent = doc.data().Status;
    CustomerEmail.textContent = doc.data().CustomerEmail;
    //BookingServicetype.textContent = doc.data().BookingServicetype;
    cross.textContent = 'x';

   
   
    li.appendChild(CustomerEmail);
    li.appendChild(BookingServicetype);
    li.appendChild(Status);
    li.appendChild(cross);
    

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

// real-time listener  to customers
db.collection('servicetime').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderServicetime(change.doc);
        } else if (change.type == 'removed'){
            let li = carList.querySelector('[data-id=' + change.doc.id + ']');
            carList.removeChild(li);
        }
    });
});
