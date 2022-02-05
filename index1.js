const updateDraggables = () => {
    const draggables = document.querySelectorAll(".draggable");
    const container = document.getElementById("addElements");
    const divCoord = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };
    draggables.forEach((draggable) => {
        draggable.addEventListener("dragstart", (e) => {
            draggable.classList.add("dragging");
            console.log(e);
            divCoord.left = e.clientX - e.path[0].offsetLeft;
            divCoord.top = e.clientY - e.path[0].offsetTop;
            divCoord.width = e.path[0].offsetWidth;
            divCoord.height = e.path[0].offsetHeight;
        });
        container.addEventListener("dragover", (e) => {
            const dragging = document.querySelector(".dragging");
            const containerCoord = container.getBoundingClientRect();
            const distanceReqTop = e.clientY - divCoord.top - containerCoord.top
            const distanceReqLeft = e.clientX - divCoord.left - containerCoord.left
            const fraction = containerCoord.width / 1000;
            let spanColWidth = divCoord.width / fraction;
            if ((spanColWidth * 10) % 10 > 5) {
                spanColWidth = parseInt(spanColWidth % 10 + 1);
            } else {
                spanColWidth = parseInt(spanColWidth)
            }
            let spanColStart = parseInt(distanceReqLeft / fraction)
            const spanColEnd = spanColWidth + spanColStart;
            if(spanColStart < 0){
                spanColStart = 1;
            }
            dragging.style.setProperty("grid-column", spanColStart + "/" + spanColEnd);
            let spanRowStart = parseInt(distanceReqTop / fraction);
            let spanRowWidth = divCoord.height / fraction;
            if ((spanRowWidth * 10) % 10 > 5) {
                spanRowWidth = parseInt(spanRowWidth % 10 + 1)
            } else {
                spanRowWidth = parseInt(spanRowWidth)
            }
            if(spanRowStart < 0){
                spanRowStart = 1;
            }
            const spanRowEnd = spanRowWidth + spanRowStart;
            dragging.style.setProperty("grid-row", spanRowStart + "/" + spanRowEnd)
        })
        draggable.addEventListener("dragend", (e) => {
            draggable.classList.remove("dragging");
        });
    });
};
window.onload = () => updateDraggables()
const selectStyle = () => {
    const BasicComponentsStylesTab = document.querySelector(
        ".basicStyleTab"
    );
    BasicComponentsStylesTab.classList.add("styleInputContainer-after");
};
const AdvSComponenetImput = () => {
    const selectedInput = document.querySelector("#advanceComponents");
    console.log(selectedInput.value);
    if (selectedInput.value === "Image") {
        const ImageInput = document.querySelector(".img");
        ImageInput.classList.add("img-after")
    }
}

const applyStyles = () => {
    const object = document.querySelectorAll(".basicInputs");
    if (object[2].value <= 0) {
        closeStyleTab();
        return;
    }
    let ele = document.getElementById("basicComponents").value;
    let element = document.createElement(ele)
    element.classList.add("draggable");
    element.setAttribute("draggable", true);
    element.style.color = object[0].value;
    element.style.backgroundColor = object[1].value;
    element.appendChild(document.createTextNode(object[2].value));
    const website = document.getElementById("addElements");
    console.log(element);
    website.appendChild(element);
    updateDraggables();
    closeStyleTab();

};

function insertImage(e) {
    console.log(e);
    const imgUrl = document.querySelector("#img")
    const imgwidth = document.querySelector("#widthImg")
    const imgheight = document.querySelector("#heightImg")

    console.log(imgUrl.value, imgwidth.value, imgheight.value);
    const ImgElement = document.createElement("img");
    ImgElement.classList.add("draggable");
    ImgElement.setAttribute("draggable", true);
    ImgElement.src = URL.createObjectURL(e.target.files[0]);
    ImgElement.style.height = imgheight.value + "px";
    ImgElement.style.width = imgwidth.value + "px";
    const website = document.getElementById("addElements");
    website.appendChild(ImgElement);
    updateDraggables();
    closeImageTab()
}
const closeStyleTab = () => {
    const BasicComponentsStylesTab = document.querySelector(
        ".basicStyleTab"
    );
    BasicComponentsStylesTab.classList.remove("styleInputContainer-after");
};
const closeImageTab = () => {
    const selectedInput = document.querySelector("#advanceComponents");
    console.log(selectedInput.value);
    if (selectedInput.value === "Image") {
        const ImageInput = document.querySelector(".img");
        ImageInput.classList.remove("img-after")
    }
}

// displayHover
const container = document.getElementById("addElements");
container.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("displaySelected")) {
        if (e === null) {
            container.classList.add("displayHover")
            // container.style.setProperty("border" ,  "3px solid cyan")
        }
        else {
            // e.target.style.setProperty("border" ,  "3px solid cyan")
            e.target.classList.add("displayHover")
        }
    }
})
container.addEventListener("mouseout", (e) => {
    if (!e.target.classList.contains("displaySelected")) {
        if (e === null) {
            container.classList.remove("displayHover")
            // container.style.setProperty("border" ,  "3px solid cyan")
        }
        else {
            // e.target.style.setProperty("border" ,  "3px solid cyan")
            e.target.classList.remove("displayHover")
        }
    }
})
container.addEventListener("click", (e) => {
   const ele = document.querySelectorAll(".displaySelected")
    if(ele !== null){
        ele.forEach(e => {
            e.classList.remove("displaySelected")
        })
    }
    if(!e.target.classList.contains("addElements")){
        e.target.classList.remove("displayHover")
        e.path[0].classList.add("displaySelected")
    }
})
