// DOM elements
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

// what can you see on the navibar
const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};
// setup guides
const setupGuides = (data) => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
          <div class="collapsible-body white"> ${guide.content} </div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html
  } else {
   guideList.innerHTML = '<h5 class="center-align">Login to view Car Service Info</h5>';
  }
  

};

/*
// DOM elements
const infoList = document.querySelector('.info');

// setup info
const setupInfo = (data) => {

  let html = '';
  data.forEach(doc => {
    const info = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${info.CustomerEmail} </div>
        <div class="collapsible-body white"> ${guide.CustomerMobileNumber} </div>
      </li>
    `;
    html += li;
  });
  infoList.innerHTML = html

};
*/


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

