if (document.readyState !== "loading") {
  console.log("Document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting!");
    initializeCode();
  });
}
function initializeCode() {
  for (let i = 0; i < 5; i++) {
    var parentDiv = document.createElement("DIV");
    parentDiv.className = "container";
    var wikiItem = document.createElement("DIV");
    wikiItem.className = "wiki-item";
    var wikiHeader = document.createElement("H1");
    wikiHeader.className = "wiki-header";
    wikiHeader.textContent = "Shiba";
    var wikiContent = document.createElement("DIV");
    wikiContent.className = "wiki-content";
    var wikiText = document.createElement("P");
    wikiText.className = "wiki-text";
    loadJsonText(wikiText, wikiContent);
    var imgContainer = document.createElement("DIV");
    imgContainer.className = "img-container";
    var wikiImg = document.createElement("IMG");
    wikiImg.className = "wiki-img";
    loadJsonImg(wikiImg, imgContainer);
    wikiContent.appendChild(imgContainer);
    wikiItem.appendChild(wikiHeader);
    wikiItem.appendChild(wikiContent);
    parentDiv.appendChild(wikiItem);
    document.getElementById("container").appendChild(parentDiv);
  }
}
function loadJsonText(wikiText, wikiContent) {
  fetch(
    "https://en.wikipedia.org/api/rest_v1/page/summary/Shiba_Inu?redirect=true"
  )
    .then((response) => response.json())
    .then((data) => {
      wikiText.textContent = data.extract;
      wikiContent.appendChild(wikiText);
    });
}
function loadJsonImg(wikiImg, imgContainer) {
  fetch("https://dog.ceo/api/breed/shiba/images/random")
    .then((response) => response.json())
    .then((data) => {
      wikiImg.src = data.message;
      imgContainer.appendChild(wikiImg);
    });
}
