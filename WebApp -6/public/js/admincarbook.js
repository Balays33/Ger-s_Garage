

const carList = document.querySelector('#car-list');

// create element & render cafe
function renderCar(doc){
    let li = document.createElement('li');
    let customer = document.createElement('span');
    let carB = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    customer.textContent = doc.data().customer;
    carB.textContent = doc.data().carB;

    li.appendChild(customer);
    li.appendChild(carB);

    carList.appendChild(li);
}

// getting data
db.collection('servicetime').get().then(snapshot => {
    //console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        renderCar(doc);
    });
});