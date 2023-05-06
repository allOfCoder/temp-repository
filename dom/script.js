const $root = document.querySelector("#root");
const $bag = document.querySelector(".shopping-bag");
const $box = document.querySelector(".item-box");

const itemAmount = 30;

function returnTarget(event) {
    let target = event.target;
    if (!event.target.id) {
        target = event.target.parentNode;
    }
    return target;
}

function appendItem(target) {
    let from = target.parentNode;
    let to;
    if (from == $bag) {
        to = $box
    } else if (from == $box) {
        to = $bag
    }
    to.append(target);
}

var item = document.createElement("span");
item.className = "item";
for (var i = 1; i <= itemAmount ; i++) {
    let tempNode = item.cloneNode(true);
    tempNode.addEventListener("click", (e) => {
        let target = returnTarget(e);
        appendItem(target);
        console.log(target.id.substring(5, 7));
    });
    tempNode.innerHTML = `<img src="/temp-repository/dom/shoes/${i}.jpg">`
    tempNode.id = `item-${i}`;
    $box.append(tempNode);
}