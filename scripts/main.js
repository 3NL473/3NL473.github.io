let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dedushka.jpg') {
      myImage.setAttribute('src','images/EZ2.png');
    } else {
      myImage.setAttribute('src','images/dedushka.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `PRIYATNO POZNAKIMICA, ${myName}`;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Davay znakomica, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
