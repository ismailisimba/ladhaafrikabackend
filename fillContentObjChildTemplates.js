function fillContentObjChildTemplates(contentObjChild) {
  
  contentObjChild["stories"] = [];
  contentObjChild["images"] = [];

  contentObjChild.stories = fillStoryObjTemplate(contentObjChild.stories);
  contentObjChild.images = fillFileObjTemplate(contentObjChild.images);

  return contentObjChild;
}
