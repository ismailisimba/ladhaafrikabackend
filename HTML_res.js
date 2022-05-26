
var backendHTML = `   
   
  
    <style>
        .backendmom{
          display: flex;
          flex-flow: column;
          flex-wrap: nowrap;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          min-height: 600px;
          height: auto;
          background-color: transparent;
        }

        #feature70{
          width: 85% !important;
        }

        .featureshow{
          display: flex;
          flex-flow: row;
          flex-wrap: nowrap;
          justify-content: flex-start;
          align-items: center;
        }

        .featureshow label{
          width: 72px !important;
        }

        .featureshow input{
         padding: 0px 0px !important;
         width: 25% !important;
        }

        .backendchildcontainer{
          position: relative;
          background-color: transparent;
          width: 600px;
          height: auto;
          overflow: hidden;
          margin-bottom: 48px;
          box-sizing: border-box;
          padding: 69px 12px;
          border: 1.69px solid black;

          transition: none;

          -webkit-transition-duration: 1s;
          -moz-transition-duration: 1s;
          -o-transition-duration: 1s;
          transition-duration: 1s;


          -webkit-transition-timing-function: ease-in;
          -moz-transition-timing-function: ease-in;
          -o-transition-timing-function: ease-in;
          transition-timing-function: ease-in;
        }

    

        .backendoxtitle{
          position: absolute;
          left: 0px;
          top:0px;
          width: 101%;
          height: 49px;
          background-color: transparent;
          color: black;
          padding: 12px 3px 3px 3px;
          font-size: 24px;
          letter-spacing: 2.69px;
          text-align: center;
          box-sizing: border-box;
          text-transform: capitalize;
        }

        .backendchildcontainer:nth-child(1){
          background-color: transparent;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        }


       

        .imagescontainer, .docscontainer{
          position: relative;
          width: 100%;
          background-color: transparent;
          display: flex;
          flex-flow: row;
          flex-wrap: wrap;
          justify-content: space-evenly;
          align-items: center;
          visibility: visible;
        }

        .imagetemplate, .doctemplate{
          width: 69px;
          height: 69px;
          margin: 6px 0px;
          border: 1px dotted black;
          background-color:black;
          opacity: 0.69;
        }

        .inputcontainer{
          position: relative;

          width: 169px;
          height: 169px;
          background-color: transparent;
          opacity: 0.69;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;

        }

          input {
            font-family: "Lexend" !important;
            width: 150px;
            padding: 12px 20px 12px 29px;
            margin: 8px 0;
            display: inline-block;
            border-radius: 4px;
            box-sizing: border-box;
          }
 

          .collapse{
            visibility: collapse;
         
          }

          .bigcontcollapse{
            height: 40px !important;
            padding-bottom: 0px !important;
            padding-top: 49px !important;
          }

          .postaddcontainer{

            padding: 0px 48px 24px 48px;
            box-sizing: border-box;
            background-color: transparent;
            position: relative;
            min-height: 600px;
            display: flex;
            flex-flow: column;
            justify-content: flex-start;
            align-items: center;
          }

          .ql-snow .ql-picker{
            color: white !important;
          }

          .ql-snow .ql-stroke {

            stroke: white !important;
          }

          .ql-snow .ql-fill, .ql-snow .ql-stroke.ql-fill{

            fill: white !important;
          }

          .ql-snow .ql-picker-options .ql-picker-item {
            color: black !important;
          }

          .ql-toolbar{
            width: 100% !important;
            height: auto;
            margin: 12px auto;
            color: black;
            background-color: #696d6b;
            opacity: .86;
            border: 0px black !important;
            z-index: 500 !important;

            display: flex;
            flex-flow: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }

          .ql-picker-item .ql-stroke {
            stroke: black !important
          }

        

          .ql-editor{

            width: 500px !important;
            color: black;
            letter-spacing: 1.69px;
            font-family: "Lexend" !important;
            font-weight: 400;
            background-color: white !important;
            min-height: 600px;
            

          }

          .postaddhead{
            position: relative;
            width: 100%;
          }

          .postaddhead textarea {
                margin-top: 15px;

                min-width: 100px;
                padding: 16px 24px;
                width: 85%;
                height: auto;
                max-height: 100px;
                overflow: hidden;
                resize: none;

                margin-bottom: 3px;
                box-sizing: border-box;

                font-weight: bold;
                letter-spacing: 1.69px;
                font-size: 18px;
          }

          .posttitle{

            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-width: 250px;
            height: auto;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 1.69px;
            background-color: transparent;
          }

          #editposttit{

            text-transform: capitalize !important;
            
          }

            .showtit, .posttitle p{

            text-transform: capitalize !important;
            color:  black;
            }

          .posttitle p, .showtit, label{
            font-weight: bold;
            font-size: 14px;
            letter-spacing: 1.69px;
            color: black;
          }

          label {
            margin-top: 24px;
          }

          .saveStoryBut{
              font-family: "Lexend";
              background-color: #696d6b;
              color: white;
              border: none;
              padding: 3px 9px;
              margin-top: 24px;
              border-radius: 3px;
              font-size: 16px;
              font-weight: 500;
              width: 145px;
              height: 45px;
              letter-spacing: 1.2px;
              box-sizing: border-box;
              box-shadow: 1px 1px 5px 0.2px black;
          }

          .saveStoryBut:hover{
            box-shadow: none;
          }

          .featuresgeneric{
            text-align: center;
          }

          .sitemap{
            position: relative;
            background-color: transparent;

            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
          }

          .sitemappiccontainer{

            width: 90%;
            min-width: 320px;
            min-height: 369px;
            margin-bottom: 24px;
            background-color:#0471a6;
            
          }

          .bigcontrolpanelcont{
            width: 100%;
            background-color: transparent;

            display: flex;
            flex-flow: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: flex-start;
          }

          .controlpanelchildcont{
            background-color: transparent !important;
            color: white !important;
            width: 240px;
            min-height: 350px;
            box-sizing: border-box;
            padding: 24px 12px;
            margin: 48px 12px;
            border: 0.69px solid black;
            box-shadow: 0.69px 0.69px 0.69px 0.69px black;
          }

          .controlpanelchildcont p {
            width: 100%;
            letter-spacing: 1.69px;
            min-width: 120px;
          }

          .contrpantitshow, .contrpancatshow, .featureshow{
            width: 150px;
            letter-spacing: 1.69px;
            box-sizing: border-box;
            min-height: 40px;
            margin-bottom: 18px;
            margin-top: 6px;
            border: 0.69px dashed white ;
          }
          

          .featureshow, .contrpantitshow, .contrpancatshow, .addrshow{
            padding: 6px 9px;
            font-size: 11px;
            font-weight: 500;
            text-overflow: ellipsis;
            white-space: normal;
            overflow: hidden;

          }

          .titcatchgeneric textarea {

                padding: 9px 16px;
                width: 90%;
                height: 120px;
                overflow-y: scroll;
                resize: none;

                margin-bottom: 3px;
                box-sizing: border-box;

                font-weight: bold;
                letter-spacing: 1.69px;
                font-size: 14px;
          }

         

          .controlpanelchildcont:nth-child(1), .controlpanelchildcont:nth-child(2), .titcatchgeneric, .featuresgeneric, .itemchild{
           
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
          }
          .featuresgeneric select{
                
                cursor: pointer;
                font: 600 14px "Lexend";
                letter-spacing: 1.3px;
                width: 100%;
                height: 36px;
             
          }

       

          .itemchild textArea{
                  padding: 16px 24px;
                  width: 96%;
                  height: 60px;
                  overflow-y: scroll;
                  resize: none;

                  margin-bottom: 3px;
                  box-sizing: border-box;

                  font-weight: bold;
                  letter-spacing: 1.69px;
                  font-size: 14px;
          }

          .titcatchgeneric, .featuresgeneric{
            width: 96%;
            box-sizing: border-box;
            padding: 24px 12px;
            margin: 6px 3px;
            border: 0.69px dotted white;
            background-color: #696d6b;
            opacity: 0.86;
          }

          .itemchild{
            width: 220px;
            height: 300px;
            box-sizing: border-box;
            padding: 6px 12px;
            margin: 24px 6px;
            border: 0.69px dotted white;
            background-color: #696d6b;
            opacity: 0.86;
          }

          .controlpanelchildcont:nth-child(3), .itemsbox{
            width: 100%;
            margin-top: -12px;
            display: flex;
            flex-flow: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
          }

          .addrshow{
            width: 150px;
            letter-spacing: 1.69px;
            min-height: 40px;
            margin-bottom: 18px;
            margin-top: 16px;
            border: 0.69px dashed white ;
          }

          .itemchild textarea {

          padding: 16px 9px;
          width: 90%;
          height: 120px;
          overflow-y: scroll;
          resize: none;

          margin-bottom: 3px;
          box-sizing: border-box;

          font-weight: 600;
          letter-spacing: 1.69px;
          font-size: 12px;
          }
          
    


            
.topcontwidth{
          width: 100%;
          background-color: transparent;
          color: white;
          border-radius: 6px;
          padding-top: 12px;
          padding-bottom: 12px;
          min-height: 18px;
          height: auto;

          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        }

        .childcontsnav{

          border-radius: 3px;

          margin: 3px auto;
          min-height: 18px;
          width: 85%;
          background-color: #061826;
          color: white;
          text-align: center;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 2px;

    
        }

        .childcontsnav:nth-child(3){
          background-color: transparent;

          display: flex;
          flex-flow: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
        }

        .childcontsnav:nth-child(3) span{
              cursor: pointer;
              background-color: #061826;
              padding: 2px;
              border-radius: 2px;
              border: solid 0.69px black;
        }



              .fileListItemCont{
                position: relative;
              width:120px;
              min-height: 36px;
              padding: 6px 0px;
              margin-top: 6px;
              margin-bottom: 6px;
              border: 0.69px dotted white;
              color: white;
              font-size: 11.69px !important;
              background-color: #696d6b;
              opacity: .86;
              }

              .cpancontentcont .fileListItemCont{

                color: white !important;
                border: 0.69px dotted white !important;

              }



              .fileListItemCont .filename,  .fileListItemCont .filetype, .fileListItemCont .filesize{
              overflow:hidden;
              white-space:nowrap;
              text-overflow: ellipsis;

              padding-left: 18px;
              padding-right: 18px;
              font-size: 10px;
              letter-spacing: 1.69px;

              background-color: transparent;
              }

                @media screen and (max-width: 1024px) {


                          .backendmom, .backendchildcontainer{


                                width:100%;

                          }


                          .ql-editor{
                            width:100% !important;
                          }
                          
                          .postaddcontainer{
                            padding: 3px 0px;
                            width: 100%;
                          }
              
              
              }
    

      </style>
      <div class="backendmom">
        <div class="backendchildcontainer">
          <div class="backendoxtitle">Files</div>
          <div class="imagescontainer">
            <div class="fileListItemCont">
              <div class="filename">ThisFilemmmmmmmmmmmmmmmmmmm.pdf</div>
              <div class="filetype">PDF</div>
              <div class="filesize">3.2 MB</div>
    
            </div>
            <div class="fileListItemCont">
              <div class="filename">ThisFilemmmmmmmmmmmmmmmmmmm.pdf</div>
              <div class="filetype">PDF</div>
              <div class="filesize">3.2 MB</div>
    
            </div>
            <div class="fileListItemCont">
              <div class="filename">ThisFilemmmmmmmmmmmmmmmmmmm.pdf</div>
              <div class="filetype">PDF</div>
              <div class="filesize">3.2 MB</div>
    
            </div>
            <div class="fileListItemCont">
              <div class="filename">ThisFilemmmmmmmmmmmmmmmmmmm.pdf</div>
              <div class="filetype">PDF</div>
              <div class="filesize">3.2 MB</div>
    
            </div>
            <div class="fileListItemCont">
              <div class="filename">ThisFilemmmmmmmmmmmmmmmmmmm.pdf</div>
              <div class="filetype">PDF</div>
              <div class="filesize">3.2 MB</div>
    
            </div>
            <div class="inputcontainer">
              <div class="topcontwidth ">
                <div class="childcontsnav"><span>69</span> - <span>files</span></div>
                <div class="childcontsnav">pg:<span>1</span> of:<span>6</span></div>
                <div class="childcontsnav"><span>back</span>   <span>next</span></div>
              </div>
              <input type="file" id="inputone" multiple>
            </div>
          </div>
        </div>
  
        <div class="backendchildcontainer">
          <div class="backendoxtitle">Sitemap</div>
          <div class="sitemap">
            <div class="sitemappiccontainer">

            </div>
            <div class="bigcontrolpanelcont">
              <div class="controlpanelchildcont">
                <div class="titcatchgeneric">
                           <p>Page/Business Title :</p>
                          <div class="contrpantitshow"></div>
                          <textarea maxlength="1500" id="posttit">Type title here...</textarea>
                </div>
                <div class="titcatchgeneric">
                        <p>Page/Business Catchphrase - Short Description:</p>
                          <div class="contrpancatshow"></div>
                          <textarea maxlength="1500" id="postcat">Type short catchy description here...</textarea>
                </div>
              </div>
              <div class="controlpanelchildcont">
                <div class="featuresgeneric">
                        <p>Gallery Images :</p>
                        <div class="featureshow featureshow1">
                          <input type="checkbox"                         unchecked>
                          <label for="featureshow1">Image1</label>
                         </div>
                        </div>
                        
               </div>
              
              <div class="controlpanelchildcont">
                <div class="itemsbox">
                  <div class="itemchild">
                    
                              <label for="emailcollector">Email</label>
                              <div class="addrshow addrshow1"></div>
                              <textarea maxlength="1500" class="emailcollector" id="emailcollector" name="emailcollector">
                              example@email.com
                              </textarea>
                  </div>
                  <div class="itemchild">
                    <label for="phonecollector">Phone Number</label>
                    <div class="addrshow addrshow2"></div>
                    <textarea maxlength="1500" class="phonecollector" id="phonecollector" name="phonecollector">
                    +2550000000
                    </textarea>
                 </div>

                     <div class="itemchild">
                            <label for="wordaddresscollector">Address</label>
                            <div class="addrshow addrshow3"></div>
                            <textarea maxlength="1500" class="wordaddresscollector" id="wordaddresscollector" name="wordaddresscollector">
                                Dar es Salaam, Raha.
                            </textarea>
                    </div>

                        <div class="itemchild">
                          <label for="fbcollector">Facebook Page</label>
                          <div class="addrshow addrshow4"></div>
                          <textarea maxlength="1500" class="fbcollector" id="fbcollector" name="fbcollector">
                              Facebook page link...
                          </textarea>
                      </div>


                        <div class="itemchild">
                          <label for="twtcollector">Twitter Page</label>
                          <div class="addrshow addrshow5"></div>
                          <textarea maxlength="1500" class="twtcollector" id="twtcollector" name="twtcollector">
                              Twitter Page Link...
                          </textarea>
                        </div>

                    <div class="itemchild">
                      <label for="instcollector">Instagram Page</label>
                      <div class="addrshow addrshow6"></div>
                      <textarea maxlength="1500" class="instcollector" id="instcollector" name="instcollector">
                          Instagram Page Link...
                      </textarea>
                    </div>

                        <div class="itemchild">
                          <label for="lnkdcollector">LinkedIn Page</label>
                          <div class="addrshow addrshow7"></div>
                          <textarea maxlength="1500" class="lnkdcollector" id="lnkdcollector" name="lnkdcollector">
                              LinkedIn Page Link...
                          </textarea>
                        </div>

                        
                </div>
              
              </div>
              <button class="saveStoryBut sitemapbut">Save</button>
            </div>

          </div>
        </div>
        <div class="backendchildcontainer">
          <div class="backendoxtitle">Posts</div>
        </div>
        <div class="backendchildcontainer">
          <div class="backendoxtitle" id="postsmakebox">Add/Edit Posts</div>
          <div class="postaddhead">
            <div class="posttitle">
              <p>Post Title :</p>
              <div class="showtit"></div>
               <textarea maxlength="1500" id="editposttit">Type title here...</textarea>
            </div>
            <div class="posttitle">
              <p style="width:69% !important">If this is a Trip Guide or Destination Offered post, please mark here:</p>
              <select name="feature69" id="feature69" class="featureshowdrop">
                <option value="none">--None--</option>
                <option value="trip_guide">Destinations (Parks, Towns, e.t.c)</option>
                <option value="destinations">Programs Offered</option>
                </select>
            </div>
            <div class="posttitle">
                <label for="feature70" style="width: 69% !important">Add tags separated by commas(luxury, budget, romantic, e.t.c):</label>
                <input type="text" placeholder="luxury, budget, e.t.c" name="feature70" id="feature70" class="featureshowdrop">
              
            </div>
            <div class="posttitle">
              <p>Post Summary/Short Description :</p>
               <textarea maxlength="1500" id="descrtit">Type description here...</textarea>
            </div>
          </div>
          <div class="postaddcontainer">
            <div class="editor" id="editor">
              <h1>Type your details here...</h1>
              <p>Type your details here...</p>
            </div>
            <button class="saveStoryBut storyaddbut">Save</button>
          </div>
         
        </div>

      </div>

      <script>
        function mainFunc(){
          

          addCollapseEvent();
          addTitEditShow();
          addSaveEditStoryButClick();
          collapseOnce();


        }

        mainFunc();

        function addCollapseEvent(){

          let myBoxes = document.querySelectorAll(".backendoxtitle");
          let storyBox = document.getElementById("postsmakebox");
          myBoxes.forEach(element => {
            element.addEventListener("click",collapseTheseBoxes)
          })

          //storyBox.addEventListener("click",collapseTheseBoxes)

         // myBoxes[myBoxes.length-1].removeEventListener("click",collapseTheseBoxes,false);
        }

        function addTitEditShow(){

          let titleBox =  document.getElementById("editposttit");
          titleBox.addEventListener("input",displayThisTit)


        }

        function addSaveEditStoryButClick(){
          let saveStoryBut =  document.querySelectorAll(".storyaddbut")[0];
          saveStoryBut.addEventListener("click",bundleMyStory);

        }


        function collapseTheseBoxes(){
          let thisBox = this.parentNode;
          let theseBoxes = document.querySelectorAll(".backendchildcontainer");
          let childs = thisBox.childNodes;

          if(thisBox.classList.contains("bigcontcollapse")){

                theseBoxes.forEach(element=>{
                  element.classList.add("bigcontcollapse");
                  let childs2 = element.childNodes;
                  childs2.forEach(element=>{
                        if(element.classList){
                            if(element.classList.contains("imagescontainer")||element.classList.contains("docscontainer")||element.classList.contains("postaddhead")||element.classList.contains("postaddcontainer")){
                                element.classList.add("collapse");
                            }else{
                            }
                        }
                    })
                })

                thisBox.classList.remove("bigcontcollapse");
                    childs.forEach(element=>{
                        if(element.classList){
                            if(element.classList.contains("imagescontainer")||element.classList.contains("docscontainer")||element.classList.contains("postaddhead")||element.classList.contains("postaddcontainer")){
                                element.classList.remove("collapse");
                            }else{
                            }
                        }
                    })

          }else{

            thisBox.classList.add("bigcontcollapse");
            childs.forEach(element=>{
                        if(element.classList){
                            if(element.classList.contains("imagescontainer")||element.classList.contains("docscontainer")||element.classList.contains("postaddhead")||element.classList.contains("postaddcontainer")){
                                element.classList.add("collapse");
                            }else{
                            }
                        }
                    })

                    myResetFuncs();

          }
        
         
        }


        function displayThisTit(){
          let myTitVal =  this.value;
          let myTitDisp = document.querySelectorAll(".showtit")[0];
          myTitDisp.innerHTML = myTitVal;
        }

        function bundleMyStory(){
          var mystuff = document.querySelectorAll(".ql-editor")[0].innerHTML;
          deStoryFunc(mystuff);
        }

        function collapseOnce(){
          let myBoxes = document.querySelectorAll(".backendoxtitle");

          myBoxes.forEach(element => {
            let thisBox = element.parentNode;
          thisBox.classList.toggle("bigcontcollapse");
        //  thisBox.classList.toggle(".backendchildcontainer")
          let childs = thisBox.childNodes;
       childs.forEach(element=>{

        if(element.classList){

              if(element.classList.contains("imagescontainer")||element.classList.contains("docscontainer")||element.classList.contains("postaddhead")||element.classList.contains("postaddcontainer")){

              element.classList.toggle("collapse");

              }else{

              }


        }
   
       })
          })
        }


      </script>

      <script>
        /*Quill Funcs*/
        /*
            var options = {
            debug: 'info',
            placeholder: 'Gilgamesh had the best epic...',
            readOnly: false,
            theme: 'snow',
            formats: "all"
            };
            */
            var toolbarOptions = [
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['link', 'image'],
                    ['blockquote', 'code-block'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                    [{ 'header': [1, 2, 3, 4, false] }],

                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'align': [] }],

                    ['clean']                                         // remove formatting button
                    ];
       // var editor = new Quill('.editor',options);

          var editor = new Quill('#editor', {
          modules: {
          toolbar: toolbarOptions,
          history: {
                      delay: 2000,
                       maxStack: 500,
                       userOnly: true
                    }
          },
          theme: 'snow'
          });
      </script>
`;