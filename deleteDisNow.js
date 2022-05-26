function deleteDisNow(deleteArr) {

  let objr = {};

  for (let i69 = 0 ; i69 < deleteArr.params[0].dataObj.length ; i69++){


  objr =  deleteDis(deleteArr.params[0].dataObj[i69].id,deleteArr.params[0].dataObj[i69].type);
    
  }

//  objr = JSON.parse(JSON.stringify(deleteArr.params[0].dataObj.length));

  return objr;
  
}



function  deleteDis(siteWideId,typeOfDataToDelete){

  let obj2 = {}

  if(typeOfDataToDelete==="file"){

    
       var folders = DriveApp.getFoldersByName("TALISSWeb");
              while (folders.hasNext()) {
              var folder = folders.next();
              var files = folder.getFilesByName(siteWideId);
                            while (files.hasNext()) {
                            var file = files.next();
                            file.setTrashed(true);

                            }
              }



              var rangeFound = proSheet.createTextFinder(siteWideId).matchCase(false).findNext();

              if(rangeFound!=null){
                  obj2 = rangeFound.getRowIndex();
                  proSheet.deleteRow(obj2);
              }else{

                obj2 = "Not Found Error!";

              }
              
              
      }else if(typeOfDataToDelete==="story"){

        siteWideId = siteWideId.split(",")[0];

           var rangeFound = homeSheet.createTextFinder(siteWideId).matchCase(false).findNext();

              if(rangeFound!=null){
                  obj2 = rangeFound.getRowIndex();
                  homeSheet.deleteRow(obj2);
              }else{

                obj2 = "Not Found Error!";

              }


      }
 // obj2 = "got here 22";
  return obj2;

}
