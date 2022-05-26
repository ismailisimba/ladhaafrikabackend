function readEndPointResponse(textResponse) {

  let responseObj = JSON.parse(textResponse);
  let adminEmails = homeSheet.getRange("H3:H7").getDisplayValues();
  let thisReturnVal = "itFailedSorry!-readEndPointResponse";

  let email = false;
  email = responseObj.email;

  if(email!==false&&email!==null){


    thisReturnVal = checkEmailVal(email,adminEmails);

    if(thisReturnVal==="welcomeAboardCaptain"){
      thisReturnVal = returnBasicAdminInfoObject(responseObj);
    }

  }else{

  }

  //adminOneFirstName.setValue(responseObj.given_name);
  //adminOneLastName.setValue(responseObj.family_name);


  return thisReturnVal;

  
}
