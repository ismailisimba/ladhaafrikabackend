function doBasicGet() {
  
  let basicGetResponse = {"Hello":"There!"};
  
  //basicGetResponse = JSON.stringify(basicGetResponse);
 // basicGetResponse = ContentService.createTextOutput(basicGetResponse);
  
  basicGetResponse = HtmlService.createHtmlOutput('     <div style="width:100%; min-height: 500px; background-color: transparent; display:flex; flex-flow: column; justify-content:center; align-items:center; text-align:center"> <div style=" font-family:Cormorant; font-size:36px; letter-spacing:3px;">You shall not pass!! <br> <a href="https://ismizo.com" target="blank" style="text-decoration:none; font-size: 24px; letter-spacing: 5px; font-weight: bold; color:darkgrey;">ismizo.com</a></div> </div> ')
  
  return basicGetResponse; 
}
