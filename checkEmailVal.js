function checkEmailVal(email,emails) {
  let returnVal = "intruderOrFalseAlarm!-checkEmailVal";

  emails = cleanupMyVals1(emails);

  for(let i=0;i<emails.length;i++){

    email = new String(email);
    email = email.trim();
    emails[i] = new String(emails[i]);
    emails[i] = emails[i].trim();

    if(emails[i]===email){

      returnVal = "welcomeAboardCaptain";
    }
    
     
    
  }
  

  return returnVal;
}
