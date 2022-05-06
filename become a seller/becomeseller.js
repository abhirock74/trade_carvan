document.getElementById('commission-structure').style.display = "none";
        // document.getElementById('paymentbg').style.border = "none";
    function commission ()
    {
    document.getElementById( 'commission-structure' ).style.display = "block";
    document.getElementById('payment-term').style.display = "none";
        document.getElementById('commissionbg').style.backgroundColor = "whitesmoke";
        document.getElementById('paymentbg').style.backgroundColor = "white";
        // document.getElementById('commissionbg').style.border = "none";
        

    }
    function payment ()
    {
      document.getElementById( 'commission-structure' ).style.display = "none";
        document.getElementById('payment-term').style.display = "block";
        document.getElementById('paymentbg').style.backgroundColor = "whitesmoke";
        // document.getElementById('paymentbg').style.border = "none";
        document.getElementById('commissionbg').style.backgroundColor = "white";
        
}
      // document.getElementById('payment-term').style.display = "none";
    // document.getElementById( 'commissionbg' ).style.backgroundColor = "yellow";
    // document.getElementById( 'paymentbg' ).style.backgroundColor = "yellow";