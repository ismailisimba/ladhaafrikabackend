function fillStoryObjTemplate(motherObjArr) {

  let storyObj = {"storyObj":"initiated"};

  storyObj["title"] = "newTit";
  storyObj["description"] = "newDescr";
  storyObj["type"] = "newTemplate";
  storyObj["tags"] = [];

  storyObj["images"] = [];
  storyObj.images = fillFileObjTemplate(storyObj.images);

  storyObj["docs"] = [];
  storyObj.docs = fillFileObjTemplate(storyObj.docs);

  storyObj["stats"] = [];
  storyObj["properties"] = [];


  motherObjArr.push(storyObj);
  return motherObjArr;
  
}
