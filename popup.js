// POP UP FORM
    // document.body.style.position = "fixed";
    function PopUp ()
    {
      document.getElementById('popupBox').style.display = "none";
      document.body.style.position = "static";
   };
  function step2(){
      document.getElementById('text2').innerHTML="2";
      document.getElementById('welcome').innerHTML="Help us improve your experience with us in future.";
      document.getElementById('subDetail').innerHTML = "Select the categories that are relevant to you:";
      document.getElementById('step1').style.display = "none";
      document.getElementById('step2').style.display = "block";
    document.getElementById('popup').style.margin = "2%  3%";
      // document.getElementById('sm-pop').style.marginLeft = "-23%";
};
    
      const counters = document.querySelectorAll(".count");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(+counter.getAttribute("data-target"));
    const count = parseInt(+counter.innerText);
    const increment = Math.trunc(target / speed);
    console.log(increment);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});

// pop up form step one
var nextB = document.getElementById('btn').style.backgroundColor = "rgb(206, 212, 218)";
// document.getElementById('step1').style.opacity = "0.5";
function buy() {
  var buyBox = document.getElementById('buy-popup');
  var sellBox = document.getElementById('sell-popup');
  var nextB = document.getElementById('btn').removeAttribute('disabled');
  buyBox.style.border = "1px solid #ffc107";
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
  sellBox.style.border = "1px solid #ffc107";
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