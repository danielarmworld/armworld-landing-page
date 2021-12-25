var button = document.getElementById("depay");
button.addEventListener("click",function(e){
  let amount = 10;
  let receiver = '0xAB2959bbe7241E2C7f1ccDDb1B6a3bD0c409308F';
  DePayWidgets.Payment({
    accept: [
      { blockchain: 'bsc', token: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', amount, receiver }
    ],
    currency: 'USD',
    event: 'ifSwapped',
    confirmed: (transaction)=>{
      // do something once the payment has been confirmed
    },
    critical: (error)=> {
      alert(`The following error occured: ${error.toString()}`)
    }
  });
});