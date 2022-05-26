function cleanupMyVals1(array) {
  
  let newArray = [];
  
  array.forEach(element => {
                
  let myString = new String(element);
  
  if (myString.length>0){
    newArray.push(myString)
  }
  
});

return newArray;
  
}
