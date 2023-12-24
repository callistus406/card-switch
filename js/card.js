let selectBtn = document.querySelector(".selectBtn");
let btnChange = document.querySelector("#btnChange");
let container = document.querySelector(".container")
let font = document.querySelector(".top");
let selector = container.classList;
let btnSelector = selectBtn.classList;
const switchFunction = function () {
    if (container.className == "container") {
        selector.remove("container");
        selector.add("container2");    
        font.style.color = "white";

        // not part of the container
        btnSelector.remove("hover");
        btnSelector.add("selectBtn");
    } else {
        selector.remove("container2");
        selector.add("container");
        font.style.color = "black";

        // not part of the container
        btnSelector.remove("selectBtn");
        btnSelector.add("hover");
    }
}
btnChange.addEventListener("click", switchFunction);
