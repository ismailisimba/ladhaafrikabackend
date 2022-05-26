function bundleSettingsObj() {

  let obj = {};

  obj["title"] = "myGenericTitle";
  obj["catchphrase"] = "myGenericCatchPhrase";
  obj["featureArr"] = [];
  obj["buzEmail"] = "myGenericBizEmail";
  obj["address"] = "myGenericAddress";
  obj["fb"] = "myGenericFacebook";
  obj["num"] = "myGenericNumber";
  obj["twt"] = "myGenericTwitter";
  obj["linkd"] = "myGenericLinkedIn";
  obj["instg"] = "myGenericInstagram";

  obj = fillSettingsObj(obj);


  return obj;
  
}
