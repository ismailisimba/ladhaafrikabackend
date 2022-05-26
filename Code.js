var ss = SpreadsheetApp.getActive();
var sheet = ss.getSheetByName("roughsheet");
var statSheet = ss.getSheetByName("stats");
var homeSheet = ss.getSheetByName("Home-en");
var artSheet = ss.getSheetByName("Blog-en");
var proSheet = ss.getSheetByName("Projects-en");
var timeZone = ss.getSpreadsheetTimeZone();
var timestamp = Utilities.formatDate(new Date(), timeZone, "dd/MM/yyyy HH:mm:ss");
var timestamp4id = Utilities.formatDate(new Date(), timeZone, "dd-MM-yyyy-HH-mm-ss");


function doPost(e){

  let paraOneVal = false;
  let basicGetResponse = {"paraOneVal":paraOneVal};
  let myDataObj = JSON.parse(e.postData.contents);
  let token = myDataObj.params[0].token;

      paraOneVal = e.parameters.paraOne;

     // sheet.getRange("A1").setValue(JSON.stringify(myDataObj.params[0].token));
  
  
  
  
  if(paraOneVal!==false &&paraOneVal!==null){

    paraOneVal = paraOneVal.toString();
    if(paraOneVal==="login"){

         basicGetResponse = {"paraOneVal":"passedatlevel2"}

          basicGetResponse["tokenObject"] = checkTokenStatus(token);
         if(basicGetResponse.tokenObject.status==="captainHasTheCon"){
           basicGetResponse["adminStatus"] = "captainHasTheCon";
           basicGetResponse["backendHTML"] = backendHTML;
           basicGetResponse["contentObj"] = bundleMyContentObject();
           basicGetResponse["settingsObj"] = bundleSettingsObj();
           basicGetResponse.contentObj.contentObj.published.images = getAllFiles();
            basicGetResponse.contentObj.contentObj.specialOne.images = getAllImages2();
           basicGetResponse.contentObj.contentObj.published.stories = getAllStories(); 
           
         }else{
           basicGetResponse["adminStatus"] = "youShallNotPass!";
         }
    }else if(paraOneVal==="uploadImages"){

        basicGetResponse["tokenObject"] = checkTokenStatus(token);
         if(basicGetResponse.tokenObject.status==="captainHasTheCon"){
           basicGetResponse["adminStatus"] = "captainHasTheCon";
           basicGetResponse["backendHTML"] = backendHTML;
           basicGetResponse["thisUploadBatchObjArr"] =  mainFileFunc(myDataObj.params[0].dataObj.images);
           basicGetResponse["contentObj"] = bundleMyContentObject();
           basicGetResponse["settingsObj"] = bundleSettingsObj();
           basicGetResponse.contentObj.contentObj.published.images = addNewFiles(basicGetResponse.thisUploadBatchObjArr);
           basicGetResponse.contentObj.contentObj.published.stories = getAllStories(); 
         }else{
           basicGetResponse["adminStatus"] = "youShallNotPass!";
         }
       
  

    }else if(paraOneVal==="delete"){
      
        basicGetResponse["tokenObject"] = checkTokenStatus(token);
         if(basicGetResponse.tokenObject.status==="captainHasTheCon"){
           basicGetResponse["adminStatus"] = "captainHasTheCon";

           basicGetResponse["deleteLv2"] = deleteDisNow(myDataObj);
            basicGetResponse["backendHTML"] = backendHTML;
           basicGetResponse["contentObj"] = bundleMyContentObject();
           basicGetResponse["settingsObj"] = bundleSettingsObj();
           basicGetResponse.contentObj.contentObj.published.images = getAllFiles();
           basicGetResponse.contentObj.contentObj.published.stories = getAllStories(); 
           basicGetResponse["deleted"] = {"success":"deleted"}
         }else{
           basicGetResponse["adminStatus"] = "youShallNotPass!";
         }

    }else if(paraOneVal==="uploadStory"){

       basicGetResponse["tokenObject"] = checkTokenStatus(token);
         if(basicGetResponse.tokenObject.status==="captainHasTheCon"){
           basicGetResponse["adminStatus"] = "captainHasTheCon";

          

           
            basicGetResponse["backendHTML"] = backendHTML;
           basicGetResponse["contentObj"] = bundleMyContentObject();
           basicGetResponse["settingsObj"] = bundleSettingsObj();
           basicGetResponse.contentObj.contentObj.published.images = getAllFiles();
           basicGetResponse.contentObj.contentObj.published.stories = uploadDisStory(myDataObj); 
           
         }else{
           basicGetResponse["adminStatus"] = "youShallNotPass!";
         }
    }else if(paraOneVal==="deleteStories"){

         basicGetResponse["tokenObject"] = checkTokenStatus(token);
         if(basicGetResponse.tokenObject.status==="captainHasTheCon"){
            basicGetResponse["adminStatus"] = "captainHasTheCon";

          basicGetResponse["deleteLv2"] = deleteDisNow(myDataObj);
            basicGetResponse["backendHTML"] = backendHTML;
           basicGetResponse["contentObj"] = bundleMyContentObject();
           basicGetResponse["settingsObj"] = bundleSettingsObj();
           basicGetResponse.contentObj.contentObj.published.images = getAllFiles();
           basicGetResponse.contentObj.contentObj.published.stories = getAllStories(); 
           basicGetResponse["deleted"] = {"success":"deleted"}
           
         }else{
           basicGetResponse["adminStatus"] = "youShallNotPass!";
         }

    }else if(paraOneVal==="quickfetch"){

        basicGetResponse["deFileObj"] = getDisBlob(myDataObj.params[0].dataObj.id);

    }else if(paraOneVal==="updatePublish"){

          basicGetResponse["tokenObject"] = checkTokenStatus(token);
         if(basicGetResponse.tokenObject.status==="captainHasTheCon"){
            basicGetResponse["adminStatus"] = "captainHasTheCon";

          basicGetResponse["updtPubLv2"] = updateStoryStatus(myDataObj.params[0].dataObj);
            basicGetResponse["backendHTML"] = backendHTML;
           basicGetResponse["contentObj"] = bundleMyContentObject();
           basicGetResponse["settingsObj"] = bundleSettingsObj();
           basicGetResponse.contentObj.contentObj.published.images = getAllFiles();
           basicGetResponse.contentObj.contentObj.published.stories = getAllStories(); 
           basicGetResponse["updatedPubStat"] = {"success":"updated"}
           
         }else{
           basicGetResponse["adminStatus"] = "youShallNotPass!";
         }

    }else if(paraOneVal==="updateSettings"){

          basicGetResponse["tokenObject"] = checkTokenStatus(token);
         if(basicGetResponse.tokenObject.status==="captainHasTheCon"){
            basicGetResponse["adminStatus"] = "captainHasTheCon";

          basicGetResponse["updtSettLv2"] = updateSettings(myDataObj.params[0].dataObj);
            basicGetResponse["backendHTML"] = backendHTML;
           basicGetResponse["contentObj"] = bundleMyContentObject();
           basicGetResponse["settingsObj"] = bundleSettingsObj();
           basicGetResponse.contentObj.contentObj.published.images = getAllFiles();
           basicGetResponse.contentObj.contentObj.published.stories = getAllStories(); 
           basicGetResponse["updatedSetStat"] = {"success":"updated"}
           
         }else{
           basicGetResponse["adminStatus"] = "youShallNotPass!";
         }

    }else if(paraOneVal==="strangerDanger"){

           basicGetResponse["contentObj"] = bundleMyContentObject();
           basicGetResponse["settingsObj"] = bundleSettingsObj();
           basicGetResponse.contentObj.contentObj.published.stories = getPublishedStories(basicGetResponse.contentObj.contentObj.published.stories[0]);

    }else if(paraOneVal==="hollacomoestas"){
             basicGetResponse = {"paraOneVal":sendEmail(myDataObj)};

    }else if(paraOneVal==="bookmebaby"){
             basicGetResponse = {"paraOneVal":sendEmail2(myDataObj)};

    }else{

        basicGetResponse = {"paraOneVal":paraOneVal}

    }
    
  
    
   
  }else{
    
   //let response = doBasicGet();
    
   basicGetResponse = {"paraOneVal":"failedatlevel1"}
  
    
  };

 
   basicGetResponse = JSON.stringify(basicGetResponse);
    basicGetResponse = ContentService.createTextOutput(basicGetResponse).setMimeType(ContentService.MimeType.JAVASCRIPT);
   return  basicGetResponse;

}

function doGet(e){
  

    
   let response = doBasicGet();
   return response;
    


}
