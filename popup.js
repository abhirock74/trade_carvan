    // POP UP FORM 
    function PopUp ()
    {
      document.getElementById( 'popupBox' ).style.display = "none";
   };
  function step2(){
      document.getElementById('text2').innerHTML="2";
      document.getElementById('welcome').innerHTML="Help us improve your experience with us in future.";
      document.getElementById('subDetail').innerHTML = "Select the categories that are relevant to you:";
      document.getElementById('btn').innerHTML = "CONFIRM";
      document.getElementById('step1').style.display = "none";
      document.getElementById('step2').style.display = "block";
      document.getElementById('popup').style.margin = "2%  10%";
    };