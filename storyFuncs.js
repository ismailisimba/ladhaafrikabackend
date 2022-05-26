function uploadDisStory(myDataObj) {
  
  let storyData = myDataObj.params[0].dataObj

 storyData = uploadStoryImages(storyData);

 storyData = writeStoryToSheet(storyData);

  let newArr = [];

  newArr = getAllStories()

  return newArr;


  
}

function uploadStoryImages(storyData){

  let dataImgArr = [];
  let dataImgObj = {};
  
  dataImgObj["id"] = "mysitewideid";
  dataImgObj["meme"] = "mymimetype";
  dataImgObj["data"] = "mybloborbase64data";

  for(let i=0 ; i < storyData.storyObj.myImages.length ; i++){

    

  

      let copy = JSON.parse(JSON.stringify(dataImgObj));

      copy.id = storyData.storyObj.myImages[i].id;
      copy.data = storyData.storyObj.myImages[i].data;
      copy.meme = storyData.storyObj.myImages[i].mime;

      storyData.storyObj.myImages[i].data = "";
      

      let blob = doFileStuff(copy.data,copy.meme,copy.id);
      let newObj = uploadFileOne(blob,copy.id);

      dataImgArr.push(newObj);


  
    
  }

  
  addNewFiles(dataImgArr);
/*

  */
  

  return storyData;
}


function writeStoryToSheet(storyData){

    homeSheet.appendRow([
    
      storyData.title,
      storyData.description,
      storyData.type,
      JSON.stringify(storyData.tags),
      JSON.stringify(storyData.storyObj),
      JSON.stringify(storyData.stats),
      timestamp,

        ]);


  return storyData;
};



function getAllStories(){

  let lastRow2 = homeSheet.getLastRow();
  let firstRow = 19;
  let dif = lastRow2 - firstRow;
  dif = dif +1;
  lastRow2 = lastRow2+1;


let storyData = {
  description: "",
  docs: [{fileObj: "initiated", name: "newNam", id: "siteWideUniqueID", data: "base64DataString", info: []}],
  images: [{fileObj: "initiated", name: "newNam", id: "siteWideUniqueID", data: "base64DataString", info: []}],
  properties: [],
  stats: [{"timeidCloud": "15/02/2021 17:33:50"}],
  storyObj: [],
  tags: [],
  title: "",
  type: "draft"}


  

let myArrObj2 = [];


   for(let j=0 ; j < dif ; j++){
     let copy = JSON.parse(JSON.stringify(storyData));
     let sum = j + 19;

    copy.title = homeSheet.getRange("A"+sum).getDisplayValue();
    copy.description = homeSheet.getRange("B"+sum).getDisplayValue();
    copy.type = homeSheet.getRange("C"+sum).getDisplayValue();
    copy.tags = homeSheet.getRange("D"+sum).getDisplayValue();
    copy.tags = JSON.parse(copy.tags);
    copy.storyObj = homeSheet.getRange("E"+sum).getDisplayValue();
    copy.storyObj = JSON.parse(copy.storyObj);
    copy.stats = homeSheet.getRange("F"+sum).getDisplayValue();
    copy.stats = JSON.parse(copy.stats);
    let disTimestamp = {timeidCl:homeSheet.getRange("G"+sum).getDisplayValue()}
    console.log(disTimestamp);
    copy.stats.push(disTimestamp);
    
   

   myArrObj2.push(copy);
 

  }
 
return myArrObj2;
}


function updateStoryStatus(obj){

  for(let i=0 ; i<obj.length ; i++){

      var rangeFound = homeSheet.createTextFinder(obj[i].id).matchCase(false).findNext();
           var rowIndex = 19;

              if(rangeFound!=null){
                  rowIndex = rangeFound.getRowIndex();

                  if(obj[i].newUpdate==="Publish"){
                    homeSheet.getRange(rowIndex,3).setValue("published");
                  }else if(obj[i].newUpdate==="unPublish"){
                    homeSheet.getRange(rowIndex,3).setValue("draft");
                  }
                 
              }else{

              rowIndex = "Not Found Error!";

              }

  }

  return obj;
}


function getPublishedStories(template){

  let myArrObj2 = [];
    let lastRow2 = homeSheet.getLastRow();
  let firstRow = 19;
  let dif = lastRow2 - firstRow;
  dif = dif +1;


   for(let j=0 ; j < dif ; j++){
   
 let sum = j + 19;
     let type = homeSheet.getRange("C"+sum).getDisplayValue();

     if(type==="published"){

         let copy = JSON.parse(JSON.stringify(template));
    

        copy.title = homeSheet.getRange("A"+sum).getDisplayValue();
    copy.description = homeSheet.getRange("B"+sum).getDisplayValue();
    copy.type = homeSheet.getRange("C"+sum).getDisplayValue();
    copy.tags = homeSheet.getRange("D"+sum).getDisplayValue();
    copy.tags = JSON.parse(copy.tags);
    copy.storyObj = homeSheet.getRange("E"+sum).getDisplayValue();
    copy.storyObj = JSON.parse(copy.storyObj);
    copy.stats = homeSheet.getRange("F"+sum).getDisplayValue();
    copy.stats = JSON.parse(copy.stats);
    let disTimestamp = {timeid:homeSheet.getRange("G"+sum).getDisplayValue()}
    copy.stats.push(disTimestamp);
myArrObj2.push(copy);

     }

   
    
   


  }
 
return myArrObj2;




}
