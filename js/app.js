let vehicleCont = document.getElementById("js-container");
let vbtn = vehicleCont.getElementsByClassName("vi-button");

 for (var i = 0; i < vbtn.length; i++) {
  vbtn[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
