function mainFileFunc(fileArr) {

  let myArrObj = [{"madeit":"toFileF"}];
  let copy = JSON.parse(JSON.stringify(myArrObj[0]));
 

  //sheet.getRange("A1").setValue(JSON.stringify(fileArr.length));

  for(let i=0 ; i < fileArr.length ; i++){

    myArrObj.push(copy);
   let blob = doFileStuff(fileArr[i].data,fileArr[i].info[0].mime,fileArr[i].id);
    myArrObj[i] =  uploadFileOne(blob,fileArr[i].id);
    myArrObj[i].mime = fileArr[i].info[0].mime;
    myArrObj[i].realName = fileArr[i].name;

  //  sheet.getRange("A"+(i+1)).setValue(myArrObj[i].name);
   // sheet.getRange("B"+(i+1)).setValue(myArrObj[i].url);
   // sheet.getRange("C"+(i+1)).setValue(myArrObj[i].mime);
   // sheet.getRange("D"+(i+1)).setValue(myArrObj[i].size);
    

  }

  return myArrObj;
  
}


function doFileStuff(filedata,filetype,filename){
  
  
  var data = Utilities.base64Decode(filedata, Utilities.Charset.UTF_8);
  var blob = Utilities.newBlob(data,filetype,filename);
  

  
  return blob;
  
  
}


function uploadFileOne(data,filename) {
 let myObj = {} 
myObj["name"] = "";
myObj["realName"] = "Story_Picture";
myObj["url"] = "";
myObj["mime"] = "";
myObj["size"] = "";
myObj["thumb"] = "nonety";
   
  
  var folders = DriveApp.getFoldersByName("LadhaWeb");
 while (folders.hasNext()) {
 var folder = folders.next();
 folder.createFile(data);
}
  
  
var files = DriveApp.getFilesByName(filename);
 while (files.hasNext()) {
 var file = files.next();
 myObj.name = file.getName();
 myObj.url = file.getUrl();
 myObj.mime = file.getMimeType();
myObj.size = file.getSize();

  }

 return myObj;

}



function addNewFiles(newFilesArr){

  let lastRow = proSheet.getLastRow();
  lastRow = lastRow+1;

  for(let i=0 ; i < newFilesArr.length ; i++){

    proSheet.getRange("A"+(i+lastRow)).setValue(newFilesArr[i].name);
    proSheet.getRange("B"+(i+lastRow)).setValue(newFilesArr[i].url);
    proSheet.getRange("C"+(i+lastRow)).setValue(newFilesArr[i].mime);
    proSheet.getRange("D"+(i+lastRow)).setValue(newFilesArr[i].size);
    proSheet.getRange("E"+(i+lastRow)).setValue(newFilesArr[i].realName);

  }
  sheet.getRange("A1").setValue(lastRow);

  let allFilesArr = getAllFiles();

  return allFilesArr;

}


function getAllFiles(){

  let lastRow2 = proSheet.getLastRow();
  let firstRow = 19;
  let dif = lastRow2 - firstRow;
  dif = dif +1;
  lastRow2 = lastRow2+1;

  
   let myObj = {} ;
myObj["name"] = "";
myObj["realName"] = "cf";
myObj["url"] = "";
myObj["mime"] = "";
myObj["size"] = "";
myObj["thumb"] = "noneytt";

let myArrObj2 = [myObj];


   for(let j=0 ; j < dif ; j++){
     let copy = JSON.parse(JSON.stringify(myArrObj2[0]));
     let sum = j + 19;

   copy.name = proSheet.getRange("A"+sum).getDisplayValue();
   copy.url = proSheet.getRange("B"+sum).getDisplayValue();
   copy.mime = proSheet.getRange("C"+sum).getDisplayValue();
   copy.size = proSheet.getRange("D"+sum).getDisplayValue();
   copy.realName = proSheet.getRange("E"+sum).getDisplayValue();

   myArrObj2.push(copy);
 //  console.log(myArrObj2[j].name);

  }
 console.log(myArrObj2);
return myArrObj2;
}


function addThumbNails(thisFilesArr){

  let tempState = true;
  let pointBreak = (thisFilesArr.length - 1)-10;

  if(pointBreak<0){
    pointBreak =0;
  }

  for(let i = thisFilesArr.length-1 ; i >= 0  ; i--){

    tempState = thisFilesArr[i].mime.includes("image");
    if(tempState){
      var files = DriveApp.getFilesByName(thisFilesArr[i].name);
    while (files.hasNext()) {
    var file = files.next();
    var blob = file.getBlob();
    thisFilesArr[i].thumb = Utilities.base64Encode(blob.getBytes());
    

      }
      
    }

    if(i==pointBreak){
      break;
    }
    
    
  }

  return thisFilesArr;

}


function getDisBlob(filename){

          let fileObj ={id:filename,data:"",mime:""};


          var folders = DriveApp.getFoldersByName("LadhaWeb");
          while (folders.hasNext()) {
          var folder = folders.next();
          var files = folder.getFilesByName(filename);

              
              while (files.hasNext()) {
              var file = files.next();
              var blob = file.getBlob();
              fileObj.data = Utilities.base64Encode(blob.getBytes());

              }

          }


           var rangeFound = proSheet.createTextFinder(filename).matchCase(false).findNext();
           var rowIndex = 19;

              if(rangeFound!=null){
                  rowIndex = rangeFound.getRowIndex();
                 fileObj.mime = proSheet.getRange(rowIndex,3).getDisplayValue();
              }else{

              rowIndex = "Not Found Error!";

              }


  
      
    

  
    
    
  

  return fileObj;

}
