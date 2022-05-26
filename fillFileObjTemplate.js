function fillFileObjTemplate(motherObjArr) {

let fileObj = {"fileObj":"initiated"};

fileObj["name"] = "newNam";
fileObj["id"] = "siteWideUniqueID";
fileObj["data"] = "base64DataString";
fileObj["info"] = [];


motherObjArr.push(fileObj);
return motherObjArr;
  
}
