function sendEmail(myDataObj){

  let obj = myDataObj.params[0].dataObj;

   var googleLogoUrl = "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png";
  var ladhaAfricaLogoUrl =   "https://ismailisimba.github.io/afrika1/resources/logo_tiny.png";
  var googleLogoBlob = UrlFetchApp
                         .fetch(googleLogoUrl)
                         .getBlob()
                         .setName("googleLogoBlob");
  var ladhaAfricaLogoBlob = UrlFetchApp
                          .fetch(ladhaAfricaLogoUrl)
                          .getBlob()
                          .setName("ladhaAfricaLogoBlob");
  MailApp.sendEmail({
    name: "Ladha Africa",
    to: "bookings@ladhaafricaadventure.com",
    cc:"ismaili.a.simba@gmail.com",
    subject: "New Message",
    htmlBody: `<img src='cid:ladhaAfricaLogo' style="float:left"> <br>
              <h3 style="color:#646635; font-family:Lexend">You have a new message from :</h3> <br>
              <p style="font-family:Lexend">Name : <span>${obj.name}</span></p> <br>
              <p style="font-family:Lexend">Email Address : <span>${obj.email}</span></p><br>
              <p style="font-family:Lexend">Comments/Message : <span>${obj.message}</span></p><br>`,
    inlineImages:
      {
        //googleLogo: googleLogoBlob,
        ladhaAfricaLogo: ladhaAfricaLogoBlob
      }
  });

  return myDataObj
}

function sendEmail2(myDataObj){

  let obj = myDataObj.params[0].dataObj;
  sheet.getRange("B11").setValue(JSON.stringify(obj));
  var googleLogoUrl = "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png";
  var ladhaAfricaLogoUrl =   "https://ismailisimba.github.io/afrika1/resources/logo_tiny.png";
  var googleLogoBlob = UrlFetchApp
                         .fetch(googleLogoUrl)
                         .getBlob()
                         .setName("googleLogoBlob");
  var ladhaAfricaLogoBlob = UrlFetchApp
                          .fetch(ladhaAfricaLogoUrl)
                          .getBlob()
                          .setName("ladhaAfricaLogoBlob");
  MailApp.sendEmail({
    name: "Ladha Africa",
    to: "bookings@ladhaafricaadventure.com",
    cc:"ismaili.a.simba@gmail.com",
    subject: "New Booking",
    htmlBody: `<img src='cid:ladhaAfricaLogo' style="float:left"> <br>
              <h3 style="color:#646635; font-family:Lexend">You have a new booking from :</h3> <br>
              <p style="font-family:Lexend">Name : <span>${obj.bookingObj.name}</span></p> <br>
              <p style="font-family:Lexend">Email Address : <span>${obj.bookingObj.email}</span></p><br>
              <p style="font-family:Lexend">Comments/Message : <span>${obj.bookingObj.comments}</span></p><br>
              <p style="font-family:Lexend">Arrival Date : <span>${obj.bookingObj.arrivalDate}</span></p><br>
              <p style="font-family:Lexend">Departure Date : <span>${obj.bookingObj.departureDate}</span></p><br>
              <p style="font-family:Lexend">Size of party : <span>${obj.bookingObj.numOfPeople}</span></p><br>
              <p style="font-family:Lexend">Native Language : <span>${obj.bookingObj.nativeLang}</span></p>`,
    inlineImages:
      {
        //googleLogo: googleLogoBlob,
        ladhaAfricaLogo: ladhaAfricaLogoBlob
      }
  });

  return myDataObj
}