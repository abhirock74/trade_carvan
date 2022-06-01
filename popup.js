

document.getElementById("btnl").addEventListener("click" , abc);

function abc(){
  document.getElementById('Close').style.display = "none"
}
document.getElementById("btn").addEventListener("click" , xyz);

function xyz(){
   document.getElementById('Close').style.display = "none"
}
// pop up form step one
var nextB = document.getElementById('btn').style.backgroundColor = "rgb(206, 212, 218)";
// document.getElementById('step1').style.opacity = "0.5";
function buy() {
  var buyBox = document.getElementById('buy-popup');
  var sellBox = document.getElementById('sell-popup');
  var nextB = document.getElementById('btn').removeAttribute('disabled');
  buyBox.style.border = "2px solid #ffc107";
  sellBox.style.border = "";
  buyBox.style.opacity = "1";
  sellBox.style.opacity = "0.5";
  document.getElementById('btn').style.backgroundColor = "#ffcc00";
  document.getElementById('buy-popup').style.color = "#ffcc00";
  document.getElementById('sell-popup').style.color = "";
};
function sell() {
  var sellBox = document.getElementById('sell-popup');
  var nextB = document.getElementById('btn').removeAttribute('disabled');
  var buyBox = document.getElementById('buy-popup');
  sellBox.style.border = "2px solid #ffc107";
  buyBox.style.border = "";
  sellBox.style.opacity = "1";
  buyBox.style.opacity = "0.5";
  document.getElementById('btn').style.backgroundColor = "#ffcc00";
  document.getElementById('sell-popup').style.color = "#ffcc00";
    document.getElementById('buy-popup').style.color = "";
}

// second step 

document.getElementById('second1').addEventListener('click', second1);
document.getElementById('btn2').disabled = true;

function second1() {
  document.getElementById('second1').classList.toggle('col-0');
  let a = document.getElementById('second1').classList.contains('col-0');
  var bt = document.getElementById('btn2');
  bt.disabled = !a
  if (bt.disabled = !a) {
    bt.style.backgroundColor = "rgb(206, 212, 218)";
  } else {
    bt.style.backgroundColor = "#ffc107";
  }

}
document.getElementById('second2').addEventListener('click', second2);
document.getElementById('btn2').disabled = true;

function second2() {
  document.getElementById('second2').classList.toggle('col-0');
  let a = document.getElementById('second2').classList.contains('col-0');
  var bt = document.getElementById('btn2');
  bt.disabled = !a
  if (bt.disabled = !a) {
    bt.style.backgroundColor = "rgb(206, 212, 218)";
  } else {
    bt.style.backgroundColor = "#ffc107";
  }

}
document.getElementById('second3').addEventListener('click', second3);
document.getElementById('btn2').disabled = true;

function second3() {
  document.getElementById('second3').classList.toggle('col-0');
  let a = document.getElementById('second3').classList.contains('col-0');
  var bt = document.getElementById('btn2');
  bt.disabled = !a
  if (bt.disabled = !a) {
    bt.style.backgroundColor = "rgb(206, 212, 218)";
  } else {
    bt.style.backgroundColor = "#ffc107";
  }

}
document.getElementById('second4').addEventListener('click', second4);
document.getElementById('btn2').disabled = true;

function second4() {
  document.getElementById('second4').classList.toggle('col-0');
  let a = document.getElementById('second4').classList.contains('col-0');
  var bt = document.getElementById('btn2');
  bt.disabled = !a
  if (bt.disabled = !a) {
    bt.style.backgroundColor = "rgb(206, 212, 218)";
  } else {
    bt.style.backgroundColor = "#ffc107";
  }

}
document.getElementById('second5').addEventListener('click', second5);
document.getElementById('btn2').disabled = true;

function second5() {
  document.getElementById('second5').classList.toggle('col-0');
  let a = document.getElementById('second5').classList.contains('col-0');
  var bt = document.getElementById('btn2');
  bt.disabled = !a
  if (bt.disabled = !a) {
    bt.style.backgroundColor = "rgb(206, 212, 218)";
  } else {
    bt.style.backgroundColor = "#ffc107";
  }

}
document.getElementById('second6').addEventListener('click', second6);
document.getElementById('btn2').disabled = true;

function second6() {
  document.getElementById('second6').classList.toggle('col-0');
  let a = document.getElementById('second6').classList.contains('col-0');
  var bt = document.getElementById('btn2');
  bt.disabled = !a
  if (bt.disabled = !a) {
    bt.style.backgroundColor = "rgb(206, 212, 218)";
  } else {
    bt.style.backgroundColor = "#ffc107";
  }

}
document.getElementById('second7').addEventListener('click', second7);
document.getElementById('btn2').disabled = true;

function second7() {
  document.getElementById('second7').classList.toggle('col-0');
  let a = document.getElementById('second7').classList.contains('col-0');
  var bt = document.getElementById('btn2');
  bt.disabled = !a
  if (bt.disabled = !a) {
    bt.style.backgroundColor = "rgb(206, 212, 218)";
  } else {
    bt.style.backgroundColor = "#ffc107";
  }

}
document.getElementById('second8').addEventListener('click', second8);
document.getElementById('btn2').disabled = true;

function second8() {
  document.getElementById('second8').classList.toggle('col-0');
  let a = document.getElementById('second8').classList.contains('col-0');
  var bt = document.getElementById('btn2');
  bt.disabled = !a
  if (bt.disabled = !a) {
    bt.style.backgroundColor = "rgb(206, 212, 218)";
  } else {
    bt.style.backgroundColor = "#ffc107";
  }

}
document.getElementById('second9').addEventListener('click', second9);
document.getElementById('btn2').disabled = true;

function second9() {
  document.getElementById('second9').classList.toggle('col-0');
  let a = document.getElementById('second9').classList.contains('col-0');
  var bt = document.getElementById('btn2');
  bt.disabled = !a
  if (bt.disabled = !a) {
    bt.style.backgroundColor = "rgb(206, 212, 218)";
  } else {
    bt.style.backgroundColor = "#ffc107";
  }

}
document.getElementById('second10').addEventListener('click', second10);
document.getElementById('btn2').disabled = true;

function second10() {
  document.getElementById('second10').classList.toggle('col-0');
  let a = document.getElementById('second10').classList.contains('col-0');
  var bt = document.getElementById('btn2');
  bt.disabled = !a
  if (bt.disabled = !a) {
    bt.style.backgroundColor = "rgb(206, 212, 218)";
  } else {
    bt.style.backgroundColor = "#ffc107";
  }

}


// login

function login() {
  document.getElementById("login-form").style.display="block"

}
function logPop(){
  document.getElementById("login-form").style.display="none"
  
}
function hidesign(){
  document.getElementById('sign').style.transitionProperty = 'height';
  document.getElementById('sign').style.transitionDuration = '1s';
  document.getElementById('sign').style.height = '0px';
}