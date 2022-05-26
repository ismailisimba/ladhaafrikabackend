function readParameters(e) {
  let tempObj = JSON.parse(e.parameters.paraOne);
  tempObj = tempObj.params[0];
  let actionVal = tempObj.action;
  let myString = Object.keys(tempObj)[0];
  
  let basicGetResponse = {"initKey":"Hello There",
                          "initVal":"Kenobi!"};
 

        
    
   
    basicGetResponse = JSON.stringify(basicGetResponse);
    basicGetResponse = ContentService.createTextOutput(basicGetResponse).setMimeType(ContentService.MimeType.JAVASCRIPT);
  
  
  
  
  return basicGetResponse;
  
  
  

  
}
