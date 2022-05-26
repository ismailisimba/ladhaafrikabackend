function checkTokenStatus(token) {


  
 // data = data.toString();
 let url = "https://oauth2.googleapis.com/tokeninfo?id_token="+token;

 //url = url.toString();
var response = UrlFetchApp.fetch(url);

var newReturn =  response.getContentText();

newReturn = readEndPointResponse(newReturn);

// var newReturn = contents3;
console.log(newReturn);

return newReturn;
  
}
