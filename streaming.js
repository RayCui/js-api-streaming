var host;
var port;
var access_token;
var accountId;
// Subscribe up to 10 instruments
var url = 'http://' + host + ':' + port + '/v1/quote?accountId=' + accountId + '&instruments=EUR_USD%2CUSD_CAD';
var messageLen = 0;
var obj = new XMLHttpRequest();
obj.open('GET', url, true);
obj.setRequestHeader('Authorization', 'Bearer ' + access_token);
obj.onreadystatechange = function(){
  if(obj.readyState == 2 && obj.status == 200) {
    // Connection is ok
    $('#title').text('Connected to Streaming Rates');
  }
  else if(obj.readyState == 3){ 
    //Receiving stream
    if (messageLen < obj.responseText.length){
      $('#mytable tr:first').after('<tr><td>' + obj.responseText.substring(messageLen,obj.responseText.length) + '</td></tr>');
    }
    messageLen = obj.responseText.length;
  }
  else if(obj.readyState == 4) {
    // Connection completed
  }
};
obj.send();