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
}
// step 2 condition
document.getElementById('btn2').style.backgroundColor = "rgb(206, 212, 218)";
function second1() {
  document.getElementById('second1').style.border = "1px solid #ffc107";
  document.getElementById('second1').style.opacity = "1";
  document.getElementById('btn2').removeAttribute('disabled');
  document.getElementById('btn2').style.backgroundColor = "#ffcc00";
};
function dsecond1() {
  document.getElementById('second1').style.border = "";
  document.getElementById('second1').style.opacity = "0.5";
  document.getElementById('btn2').disabled = "true";
  document.getElementById('btn2').style.backgroundColor = "rgb(206, 212, 218)";
};
function second2() {
  document.getElementById('second2').style.border = "1px solid #ffc107";
  document.getElementById('second2').style.opacity = "1";
    document.getElementById('btn2').removeAttribute('disabled');
  document.getElementById('btn2').style.backgroundColor = "#ffcc00";
};
function dsecond2() {
  document.getElementById('second2').style.border = "";
  document.getElementById('second2').style.opacity = "0.5";
  document.getElementById('btn2').disabled = "true";
  document.getElementById('btn2').style.backgroundColor = "rgb(206, 212, 218)";
};
function second3() {
  document.getElementById('second3').style.border = "1px solid #ffc107";
  document.getElementById('second3').style.opacity = "1";
    document.getElementById('btn2').removeAttribute('disabled');
  document.getElementById('btn2').style.backgroundColor = "#ffcc00";
};
function dsecond3() {
  document.getElementById('second3').style.border = "";
  document.getElementById('second3').style.opacity = "0.5";
  document.getElementById('btn2').disabled = "true";
  document.getElementById('btn2').style.backgroundColor = "rgb(206, 212, 218)";
};
function second4() {
  document.getElementById('second4').style.border = "1px solid #ffc107";
  document.getElementById('second4').style.opacity = "1";
    document.getElementById('btn2').removeAttribute('disabled');
  document.getElementById('btn2').style.backgroundColor = "#ffcc00";
};
function dsecond4() {
  document.getElementById('second4').style.border = "";
  document.getElementById('second4').style.opacity = "0.5";
  document.getElementById('btn2').disabled = "true";
  document.getElementById('btn2').style.backgroundColor = "rgb(206, 212, 218)";
};
function second5() {
  document.getElementById('second5').style.border = "1px solid #ffc107";
  document.getElementById('second5').style.opacity = "1";
    document.getElementById('btn2').removeAttribute('disabled');
  document.getElementById('btn2').style.backgroundColor = "#ffcc00";
};
function dsecond5() {
  document.getElementById('second5').style.border = "";
  document.getElementById('second5').style.opacity = "0.5";
  document.getElementById('btn2').disabled = "true";
  document.getElementById('btn2').style.backgroundColor = "rgb(206, 212, 218)";
};
function second6() {
  document.getElementById('second6').style.border = "1px solid #ffc107";
  document.getElementById('second6').style.opacity = "1";
    document.getElementById('btn2').removeAttribute('disabled');
  document.getElementById('btn2').style.backgroundColor = "#ffcc00";
};
function dsecond6() {
  document.getElementById('second6').style.border = "";
  document.getElementById('second6').style.opacity = "0.5";
  document.getElementById('btn2').disabled = "true";
  document.getElementById('btn2').style.backgroundColor = "rgb(206, 212, 218)";
};
function second7() {
  document.getElementById('second7').style.border = "1px solid #ffc107";
  document.getElementById('second7').style.opacity = "1";
    document.getElementById('btn2').removeAttribute('disabled');
  document.getElementById('btn2').style.backgroundColor = "#ffcc00";
};
function dsecond7() {
  document.getElementById('second7').style.border = "";
  document.getElementById('second7').style.opacity = "0.5";
  document.getElementById('btn2').disabled = "true";
  document.getElementById('btn2').style.backgroundColor = "rgb(206, 212, 218)";
};
function second8() {
  document.getElementById('second8').style.border = "1px solid #ffc107";
  document.getElementById('second8').style.opacity = "1";
    document.getElementById('btn2').removeAttribute('disabled');
  document.getElementById('btn2').style.backgroundColor = "#ffcc00";
};
function dsecond8() {
  document.getElementById('second8').style.border = "";
  document.getElementById('second8').style.opacity = "0.5";
  document.getElementById('btn2').disabled = "true";
  document.getElementById('btn2').style.backgroundColor = "rgb(206, 212, 218)";
};
function second9() {
  document.getElementById('second9').style.border = "1px solid #ffc107";
  document.getElementById('second9').style.opacity = "1";
    document.getElementById('btn2').removeAttribute('disabled');
  document.getElementById('btn2').style.backgroundColor = "#ffcc00";
};
function dsecond9() {
  document.getElementById('second9').style.border = "";
  document.getElementById('second9').style.opacity = "0.5";
  document.getElementById('btn2').disabled = "true";
  document.getElementById('btn2').style.backgroundColor = "rgb(206, 212, 218)";
};
function second10() {
  document.getElementById('second10').style.border = "1px solid #ffc107";
  document.getElementById('second10').style.opacity = "1";
    document.getElementById('btn2').removeAttribute('disabled');
  document.getElementById('btn2').style.backgroundColor="#ffcc00"
};
function dsecond10() {
  document.getElementById('second10').style.border = "";
  document.getElementById('second10').style.opacity = "0.5";
  document.getElementById('btn2').disabled = "true";
  document.getElementById('btn2').style.backgroundColor = "rgb(206, 212, 218)";
};