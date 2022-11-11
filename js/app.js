/*-----------Variables--------------*/

let vehicleCont = document.getElementById("js-container");
let vbtn = vehicleCont.getElementsByClassName("vi-button");
let sgk = document.getElementById("js-szgk");
let moped = document.getElementById("js-moped");
let button = document.querySelector(".js-btn")




 

/*-----------Events--------------*/

/*  sgk.addEventListener("click", testvalue);  */

button.addEventListener("click", test);





/*-----------Function--------------*/

/*  function testvalue() {
  let vinumb = sgk.value; 
  console.log(vinumb);
}  */


for (var i = 0; i < vbtn.length; i++) {
  vbtn[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

  });
}



function test(){
  /* let jarmu = sgk.value;  */
 console.log('ez egy teszt')
  if (sgk.value == 1){
    console.log("auto!");
  } if (moped.value == "2"){
    console.log("moped!");
  } 
}

