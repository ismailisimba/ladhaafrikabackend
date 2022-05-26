function getAllFiles2(){

  let lastRow2 = proSheet.getLastRow();
  let firstRow = 19;
  let dif = lastRow2 - firstRow;
  dif = dif +1;
  lastRow2 = lastRow2+1;

  
   let myObj = {} ;
myObj["name"] = "";
myObj["url"] = "";
myObj["mime"] = "";
myObj["size"] = "";
myObj["thumb"] = "none";

let myArrObj2 = [myObj];


   for(let j=0 ; j < dif ; j++){
     let copy = JSON.parse(JSON.stringify(myArrObj2[0]));
     let sum = j + 19;

   copy.name = proSheet.getRange("A"+sum).getDisplayValue();
   copy.url = proSheet.getRange("B"+sum).getDisplayValue();
   copy.mime = proSheet.getRange("C"+sum).getDisplayValue();
   copy.size = proSheet.getRange("D"+sum).getDisplayValue();

   myArrObj2.push(copy);
 //  console.log(myArrObj2[j].name);

  }
 console.log(myArrObj2);
return myArrObj2;
}


function getAllImages2(){

  let lastRow2 = proSheet.getLastRow();
  let firstRow = 19;
  let dif = lastRow2 - firstRow;
  dif = dif +1;
  lastRow2 = lastRow2+1;

  
   let myObj = {} ;
myObj["name"] = "";
myObj["ogname"] = "";
myObj["url"] = "";
myObj["mime"] = "";
myObj["size"] = "";
myObj["thumb"] = "none";

let myArrObj2 = [myObj];


   for(let j=0 ; j < dif ; j++){
     let copy = JSON.parse(JSON.stringify(myArrObj2[0]));
     let sum = j + 19;
     let tempMime = proSheet.getRange("C"+sum).getDisplayValue();
     
          if(tempMime.includes("image/")){
                  copy.name = proSheet.getRange("A"+sum).getDisplayValue();
                  copy.url = proSheet.getRange("B"+sum).getDisplayValue();
                  copy.mime = proSheet.getRange("C"+sum).getDisplayValue();
                  copy.size = proSheet.getRange("D"+sum).getDisplayValue();
                  copy.ogname = proSheet.getRange("E"+sum).getDisplayValue();
                   myArrObj2.push(copy);
            } 
                   

   //myArrObj2.push(copy);
 //  console.log(myArrObj2[j].name);

  }
  myArrObj2.shift();
 console.log(myArrObj2);
return myArrObj2;
}

