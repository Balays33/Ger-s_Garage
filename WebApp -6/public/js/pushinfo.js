

var email = "balazs.barcza@gmail.com";


/*
function test(){
    var phonenumber = document.getElementById("phonenumber").value;

    window.alert(phonenumber);
    console.log(phonenumber);
}
*/
function pushcustomer() {

    var firstname = document.getElementById("firstname").value;
    var secondname = document.getElementById("secondname").value;
    var phonenumber = document.getElementById("phonenumber").value;
    
    var address = document.getElementById("address").value;
    var birthday = document.getElementById("birthday").value;
    var comment = document.getElementById("comment").value;
    console.log('send data up');
    // Add a new document in collection "cities"
    db.collection("customers").doc(email).set({
        CustomerFirstName: firstname,
        CustomerSecondName: secondname,
        CustomerMobileNumber: phonenumber,
        CustomerEmail: email,
        CustomerAddress: address,
        CustomerBday: birthday,
        CustomerComments: comment
})
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });

}


function pushvehicle() {

    var VehicleLicenceNumber = document.getElementById("validationServer01").value;
    var Vehiclebrand = document.getElementById("validationServer02").value;
    var Vehicletype = document.getElementById("validationServer03").value;
    
    var VehicleYear = document.getElementById("validationServer04").value;
    var VehicleEngineType = document.getElementById("validationServer05").value;
    console.log('send data up');
    // Add a new document in collection "cities"
    db.collection("Vehicle").doc(email).set({
        VehicleLicenceNumber: VehicleLicenceNumber,
        Vehiclebrand: Vehiclebrand,
        Vehicletype: Vehicletype,
        VehicleYear: VehicleYear,
        VehicleEngineType: VehicleEngineType,
        CustomerEmail: email,
})
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });

}


mobiscroll.settings = {
    theme: 'mobiscroll-dark'
};

var booked = [],
    invalid = ['w1'],
    now = new Date(),
    min = new Date(now.getFullYear(), now.getMonth(), now.getDate()),
    max = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate()),
    firstMonth = generateMonthEvents(now.getFullYear(), now.getMonth());

booked = firstMonth.labels;
invalid = invalid.concat(firstMonth.invalid);

instance = mobiscroll.calendar('#demo', {
    display: 'inline',
    controls: ['calendar'],
    min: min,
    max: max,
    invalid: ['w1'],
    labels: booked,
    onPageLoading: function (event, inst) {
        var newItems,
            year = event.firstDay.getFullYear(),
            month = event.firstDay.getMonth(),
            isEventsLoaded = (inst.settings.labels).filter(function (v) {
                return v.d.getMonth() == month + 1;
            }).length;

        if (!isEventsLoaded) {
            newItems = generateMonthEvents(year, month + 1);
            inst.settings.labels = inst.settings.labels.concat(newItems.labels);
            inst.settings.invalid = inst.settings.invalid.concat(newItems.invalid);
        }
    }
});

function getRandomDay() {
    return Math.floor(Math.random() * 100) % 28 + 1;
}

function generateMonthEvents(year, month) {
    var isDisabled,
        tempDay,
        invalid = [],
        events = [],
        disabledDays = [getRandomDay(), getRandomDay(), getRandomDay(), getRandomDay()];

    for (var i = 1; i <= new Date(year, month + 1, 0).getDate(); ++i) {
        tempDay = new Date(year, month, i, now.getHours(), now.getSeconds());
        if (tempDay.getTime() >= now.getTime() && tempDay.getTime() <= max.getTime()) {
            isDisabled = disabledDays.indexOf(i) !== -1 || tempDay.getDay() == 1;
            if (isDisabled) {
                invalid.push(tempDay);
            }
            events.push({
                d: tempDay,
                text: isDisabled ? (tempDay.getDay() == 1 ? 'CLOSED' : 'FULL') : Math.round(Math.random() * 10) % 5 + 2 + ' SPOTS',
                color: isDisabled ? '#ccc' : '#8ada8a'
            });
        }
    }

    return {
        labels: events,
        invalid: invalid
    };
}