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
      document.getElementById('btn').innerHTML = "CONFIRM";
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
 var nextB = document.getElementById('btn').style.backgroundColor="rgb(206, 212, 218)"
document.getElementById('step1').style.opacity = "0.5";
function buy() {
  var buyBox = document.getElementById('buy-popup');
  var sellBox = document.getElementById('sell-popup');
  var nextB = document.getElementById('btn').removeAttribute('disabled');
  buyBox.style.border = "1px solid #ffc107"
  sellBox.style.border = ""
  document.getElementById('step1').style.opacity = "1";
  document.getElementById('btn').style.backgroundColor="#ffcc00"
}
function sell() {
  var sellBox = document.getElementById('sell-popup');
  var nextB = document.getElementById('btn').removeAttribute('disabled');
  var buyBox = document.getElementById('buy-popup');
  sellBox.style.border = "1px solid #ffc107"
  buyBox.style.border = ""
  document.getElementById('step1').style.opacity = "1";
}
// step 2 condition


