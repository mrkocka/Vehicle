let vehicleCont = document.getElementById("js-container");
let vbtn = vehicleCont.getElementsByClassName("vi-button");
let sgk = document.getElementById("js-szgk");

for (var i = 0; i < vbtn.length; i++) {
  vbtn[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


 sgk.addEventListener("click", testvalue);

function testvalue() {
  console.log("Király!");
  let vinumb = sgk.value; 
  console.log(vinumb);
} 
