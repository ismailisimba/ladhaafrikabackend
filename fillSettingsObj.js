function fillSettingsObj(settingsObj){




   settingsObj.title = artSheet.getRange("B"+"3").getDisplayValue();
   settingsObj.catchphrase = artSheet.getRange("C"+"3").getDisplayValue();
   settingsObj.featureArr = fillFeaturedImages(statSheet);
   settingsObj.buzEmail = artSheet.getRange("M"+"3").getDisplayValue();
   settingsObj.address = artSheet.getRange("N"+"3").getDisplayValue();
   settingsObj.fb = artSheet.getRange("O"+"3").getDisplayValue();
   settingsObj.num = artSheet.getRange("P"+"3").getDisplayValue();
   settingsObj.twt = artSheet.getRange("Q"+"3").getDisplayValue();
   settingsObj.linkd = artSheet.getRange("R"+"3").getDisplayValue();
   settingsObj.instg = artSheet.getRange("S"+"3").getDisplayValue();
   

return settingsObj;

  
}


function fillFeaturedImages(statSheet){
  let lastRow = statSheet.getLastRow();
  let arr = [];

  for(i=0;i<lastRow;i++){
    arr.push(statSheet.getRange("A"+(i+1)).getDisplayValue());

  }

  return arr;
}

/*function fillSettingsObj(settingsObj) {
  let tempObj = {}
  let numOfRows = 0;
  let lastRow = thisSheet.getLastRow(); 
  numOfRows = lastRow - 18;
  
  tempObj["backgroundImages"] = ["initiated"];
  tempObj["greetings"] = ["initiated"];
  tempObj["quotes"] = ["initiated"];
  tempObj["qoauth"] = ["initiated"];
  tempObj["listings"] = [{"iam":"initiated"}];
  tempObj["numOfListings"] = numOfRows;
  
  
  
  tempObj.backgroundImages = thisSheet.getRange("A3:A15").getValues();
  tempObj.backgroundImages = cleanupMyVals1(tempObj.backgroundImages);
  tempObj.greetings = thisSheet.getRange("B3:B15").getValues();
  tempObj.greetings = cleanupMyVals1(tempObj.greetings);
  tempObj.quotes = thisSheet.getRange("C3:C15").getValues();
  tempObj.quotes = cleanupMyVals1(tempObj.quotes);
  tempObj.qoauth = thisSheet.getRange("D3:D15").getValues();
  tempObj.qoauth = cleanupMyVals1(tempObj.qoauth);
  
  tempObj.listings[0]["title"] = "I";
  tempObj.listings[0]["description"] = "used";
  tempObj.listings[0]["type"] = "to";
  tempObj.listings[0]["tags"] = "rule";
  tempObj.listings[0]["image1"] = "the";
  tempObj.listings[0]["image2"] = "world";
  tempObj.listings[0]["image3"] = "seas";
  tempObj.listings[0]["imageSmall"] = "would";
  tempObj.listings[0]["stat1"] = "rise";
  tempObj.listings[0]["stat2"] = "when";
  tempObj.listings[0]["stat3"] = "i";
  tempObj.listings[0]["stat4"] = "gave";
  tempObj.listings[0]["stat5"] = "theword";
  
  tempObj = filldeTemplate(tempObj,numOfRows);
  
  
  for(let i=0; i<= numOfRows; i++) {
   
    tempObj.listings[i]["title"] = thisSheet.getRange(i+19,1).getValue();
    tempObj.listings[i]["description"] = thisSheet.getRange(i+19,2).getValue();
    tempObj.listings[i]["type"] = thisSheet.getRange(i+19,3).getValue();
    tempObj.listings[i]["tags"] = thisSheet.getRange(i+19,3).getValue();
    tempObj.listings[i]["image1"] =thisSheet.getRange(i+19,5).getValue();
    tempObj.listings[i]["image2"] = thisSheet.getRange(i+19,6).getValue();
    tempObj.listings[i]["image3"] = thisSheet.getRange(i+19,7).getValue();
    tempObj.listings[i]["imageSmall"] = thisSheet.getRange(i+19,8).getValue();
    tempObj.listings[i]["stat1"] = thisSheet.getRange(i+19,9).getValue();
    tempObj.listings[i]["stat2"] = thisSheet.getRange(i+19,10).getValue();
    tempObj.listings[i]["stat3"] = thisSheet.getRange(i+19,11).getValue();
    tempObj.listings[i]["stat4"] = thisSheet.getRange(i+19,12).getValue();
    tempObj.listings[i]["stat5"] = thisSheet.getRange(i+19,13).getValue();
  }
  
  
  
  
  
  
  homeObj = tempObj;
  return homeObj;
  
}*/
