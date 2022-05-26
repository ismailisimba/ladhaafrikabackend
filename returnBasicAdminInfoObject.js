function returnBasicAdminInfoObject(responseObj) {

  let admininfoobj = {};
  admininfoobj.firstName = responseObj.given_name;
  admininfoobj.lastName =  responseObj.family_name;
  admininfoobj.pic =  responseObj.picture;
  admininfoobj.email = responseObj.email;
  admininfoobj.status = "captainHasTheCon";

  return admininfoobj;
  
}
