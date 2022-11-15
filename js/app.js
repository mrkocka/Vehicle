//Variables
let vehicleCont = document.getElementById("js-container");
let vbtn = vehicleCont.getElementsByClassName("vi-button");
let submitButton = document.getElementById("submit");
let closeX = document.getElementById("close-button");
let question = document.getElementById("question-area");

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
    console.log("50km/h");
  }
  if (sgk.checked === true && location != 1) {
    //Vontatsz utánfutót?
    question.classList.toggle("null");
  }

  if (sgk.checked === true && location === 2 && yes.checked === true) {
    console.log("70km/h");
  } else if (sgk.checked === true && location === 2 && no.checked === true) {
    console.log("90km/h");
  }

  if (sgk.checked === true && location === 3 && yes.checked === true) {
    console.log("80km/h");
  }
  if (sgk.checked === true && location === 3 && no.checked === true) {
    console.log("110km/h");
  }

  if (sgk.checked === true && location === 4 && yes.checked === true) {
    console.log("80km/h");
  }
  if (sgk.checked === true && location === 4 && no.checked === true) {
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
  question.classList.toggle("null");
  console.log("bezártam");
}
