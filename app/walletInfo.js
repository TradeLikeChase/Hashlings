  
  function getWalletData(){
  
    var XMLHttpRequest = require('xhr2');
    var request = new XMLHttpRequest();
    var bodyVar ="";

    request.open('GET', 'https://blockchain.info/q/getreceivedbyaddress/bc1q9tsnk0yyd2tn6chpka8gw93lzwl5dk4wa6gvke?confirmations=3');
    
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
        bodyVar = this.responseText;
        }
    };
    
    request.send();

    return bodyVar;
}