const $root = document.querySelector(".root");

const div = document.createElement("div");
function createDivElement(elemName, className) {
    tempElement = div.cloneNode(false);
    tempElement.className = className;
    return tempElement;
}
const $headerSet = createDivElement("div", "header-set");
const $contentSet = createDivElement("div", "content-set");

$root.append($headerSet, $contentSet);