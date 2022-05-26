function updateSettings(obj) {
  clearFeaturedImage();
  updateFeaturedImages(obj);

  artSheet.getRange("B"+"3").setValue(obj.title);
  artSheet.getRange("C"+"3").setValue(obj.catchphrase);
  artSheet.getRange("D"+"3").setValue(obj.featureOne);
  artSheet.getRange("M"+"3").setValue(obj.email);
  artSheet.getRange("N"+"3").setValue(obj.address);
  artSheet.getRange("O"+"3").setValue(obj.fb);
  artSheet.getRange("P"+"3").setValue(obj.num);
  artSheet.getRange("Q"+"3").setValue(obj.twtt);
  artSheet.getRange("R"+"3").setValue(obj.lnkd);
  artSheet.getRange("S"+"3").setValue(obj.inst);
   

  return obj;
  
}


function updateFeaturedImages(obj){
  statSheet.getRange("B1").setValue(JSON.stringify(obj));
  for(i=0;i<obj.featureArr.length;i++){
    statSheet.getRange("A"+(i+2)).setValue(obj.featureArr[i])
  }
};


function clearFeaturedImage(){
  let lastRow = statSheet.getLastRow();
  for(i=0;i<lastRow;i++){
    statSheet.getRange("A"+(i+2)).setValue("");
  }
};
