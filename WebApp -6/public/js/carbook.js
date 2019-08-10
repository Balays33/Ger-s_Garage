
/*
const carList = document.querySelector('#car-list');
const carList1 = document.querySelector('#car-list1');
const carList2 = document.querySelector('#car-list2');
const carList3 = document.querySelector('#car-list3');
const form = document.querySelector('#add-car-form');

// create element & render cafe
function renderCar(doc){
    let li = document.createElement('li');
    let VehicleLicenceNumber = document.createElement('span');
    let li1 = document.createElement('li');
    let VehicleYear = document.createElement('span');
    let li2 = document.createElement('li');
    let VehicleEngineType = document.createElement('span');
    let li3 = document.createElement('li');
    let VehicleType = document.createElement('span');
    let Brand = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    VehicleLicenceNumber.textContent = doc.data().VehicleLicenceNumber;
    li1.setAttribute('data-id', doc.id);
    VehicleYear.textContent = doc.data().VehicleYear;
    li2.setAttribute('data-id', doc.id);
    VehicleEngineType.textContent = doc.data().VehicleEngineType;
    li3.setAttribute('data-id', doc.id);
    VehicleType.textContent = doc.data().VehicleType;
    Brand.textContent = doc.data().Brand;
    

    li.appendChild(VehicleLicenceNumber);
    li1.appendChild(VehicleYear);
    li2.appendChild(VehicleEngineType);
    li3.appendChild(VehicleType);
    li.appendChild(Brand);


    carList.appendChild(li);
    carList1.appendChild(li1);
    carList2.appendChild(li2);
    carList3.appendChild(li3);
}

// getting data
db.collection('Vehicle').get().then(snapshot => {
    //console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        renderCar(doc);
    });
});

// saving data
/*
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Vehicle').add({
        VehicleLicenceNumber: form.VehicleLicenceNumber.value,
        VehicleYear: form.VehicleYear.value,
        VehicleEngineType: form.VehicleEngineType.value,
        VehicleType: form.VehicleType.value,
        Brand: form.Brand.value
    });
    form.VehicleLicenceNumber.value = '';
    form.VehicleYear.value = '';
    form.VehicleEngineType.value = '';
    form.VehicleType.value = '';
    form.Brand.value = '';
    
});
*/

const carList = document.querySelector('#car-list');
const form = document.querySelector('#add-car-form');

// create element & render cafe
function renderCar(doc){
    let li = document.createElement('li');
    let VehicleLicenceNumber = document.createElement('span');
    let VehicleYear = document.createElement('span');
    let Brand = document.createElement('span');
    let VehicleEngineType = document.createElement('span');
    let VehicleType = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    VehicleLicenceNumber.textContent = doc.data().VehicleLicenceNumber;
    VehicleYear.textContent = doc.data().VehicleYear;
    Brand.textContent = doc.data().Brand;
    VehicleEngineType.textContent = doc.data().VehicleEngineType;
    VehicleType.textContent = doc.data().VehicleType;
    cross.textContent = 'x';

    li.appendChild(VehicleLicenceNumber);
    li.appendChild(VehicleYear);
    li.appendChild(Brand);
    li.appendChild(VehicleEngineType);
    li.appendChild(VehicleType);
    li.appendChild(cross);

    carList.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) =>{
        e.stopPropagation();
        console.log('deleting data');
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Vehicle').doc(id).delete();
    });
}


/*
// getting data
db.collection('Vehicle').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log("getting data");
        console.log(doc.data());
        renderCar(doc);
    });
});
*/

// real-time listener
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


function test(){
    console.log('button working');
    
    // saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("saving data");
    db.collection('Vehicle').add({
        VehicleLicenceNumber: form.VehicleLicenceNumber.value,
        VehicleYear: form.VehicleYear.value,
        Brand: form.Brand.value,
        VehicleEngineType: form.VehicleEngineType.value,
        VehicleType: form.VehicleYear.value
    });
    form.VehicleLicenceNumber.value = '';
    form.VehicleYear.value = '';
    form.Brand.value = '';
    form.VehicleEngineType.value = '';
    form.VehicleType.value = '';
});
}