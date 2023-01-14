//Variables
let vehicleCont = document.getElementById("js-container");
let vbtn = vehicleCont.getElementsByClassName("vi-button");
let submitButton = document.getElementById("submit");
let closeX = document.getElementById("close-button");
/* let popup = document.getElementById("popup"); */
let popupArea = document.getElementById("popup-area");

//Fnformation Window
let question = document.getElementById("question-area");
let speed50 = document.getElementById("50speed");
let speed70 = document.getElementById("70speed");
let speed80 = document.getElementById("80speed");
let speed90 = document.getElementById("90speed");
let speed110 = document.getElementById("110speed");
let speed130 = document.getElementById("130speed");

//Vehicle
let sgk = document.getElementById("sgk-chec");
let moped = document.getElementById("moped-chec");
let bike = document.getElementById("bike-chec");
let bus = document.getElementById("bus-chec");
let truck = document.getElementById("truck-chec");

//Variables Question
let yes = document.getElementById("trailer-yes");
let no = document.getElementById("trailer-no");

// Keretes kijelölésért felelős for ciklus
for (var i = 0; i < vbtn.length; i++) {
  vbtn[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Eventes
submitButton.addEventListener("click", VehicleQuestion);
closeX.addEventListener("click", close);
yes.addEventListener("click", VehicleQuestion);
no.addEventListener("click", VehicleQuestion);

//Functions

function test() {
  console.log("Király!");
}

function VehicleQuestion() {
  let location = document.getElementById("location").selectedIndex;

  // Személygépjármű
  if (sgk.checked === true && location === 1) {
    popupArea.classList.toggle("null");
    speed50.classList.toggle("null");
    console.log("50km/h");
  }
  if (sgk.checked === true && location != 1) {
    //Vontatsz utánfutót?
    popupArea.classList.toggle("null");
    question.classList.toggle("null");
  }

  if (sgk.checked === true && location === 2 && yes.checked === true) {
    popupArea.classList.toggle("null");
    speed70.classList.toggle("null");
    console.log("70km/h");
  } else if (sgk.checked === true && location === 2 && no.checked === true) {
    popupArea.classList.toggle("null");
    speed90.classList.toggle("null");
    console.log("90km/h");
  }

  if (sgk.checked === true && location === 3 && yes.checked === true) {
    popupArea.classList.toggle("null");
    speed80.classList.toggle("null");
    console.log("80km/h");
  }
  if (sgk.checked === true && location === 3 && no.checked === true) {
    popupArea.classList.toggle("null");
    speed110.classList.toggle("null");
    console.log("110km/h");
  }

  if (sgk.checked === true && location === 4 && yes.checked === true) {
    popupArea.classList.toggle("null");
    speed80.classList.toggle("null");
    console.log("80km/h");
  }
  if (sgk.checked === true && location === 4 && no.checked === true) {
    popupArea.classList.toggle("null");
    speed130.classList.toggle("null");
    console.log("130km/h");
  }

  // Motorkerékpár
  if (moped.checked === true) {
    console.log("Moped");
  }
  // Nagymotor
  if (bike.checked === true) {
    console.log("Bike");
  }

  // Busz
  if (bus.checked === true) {
    console.log("Bus");
  }

  // Kamion
  if (truck.checked === true) {
    console.log("Truck");
  }
}

function close() {
  popupArea.classList.toggle("null");

  console.log("bezártam");
}
