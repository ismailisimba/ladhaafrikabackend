function bundleMyContentObject() {
  
  var initObject = {"I am":"initiated"};
  
  initObject["contentObj"] = {"contentObj":"initiated"};
  
  initObject.contentObj["draft"] = {"draft":"is initiated"};
   initObject.contentObj["delete"] = [{"id":"myID","type":"myType"}];
  initObject.contentObj["saved"] = {"saved":"is initiated"};
  initObject.contentObj["published"] = {"published":"is initiated"};
  
  initObject.contentObj.draft = fillContentObjChildTemplates(initObject.contentObj.draft);
  initObject.contentObj.saved = JSON.parse(JSON.stringify(initObject.contentObj.draft));
  initObject.contentObj.published = JSON.parse(JSON.stringify(initObject.contentObj.draft));
   initObject.contentObj.specialOne = JSON.parse(JSON.stringify(initObject.contentObj.draft));

  initObject.contentObj.draft.draft = {"Iam":"draft"};
  initObject.contentObj.saved.draft = {"Iam":"saved"};
  initObject.contentObj.published.draft = {"Iam":"published"};
  
  
  
  
  
  //initObject.contentObj.published = fillHomeObj(initObject.contentObj.published,proSheet);
    
  return initObject;
  
}