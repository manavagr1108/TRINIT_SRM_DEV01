// add items
function addItem() {
    let elementType = document.getElementById("elementType").value;
    let elementValue = document.getElementById("value").value;

    var typeName1 = elementType;
    var typeName = elementType + " header";
    console.log(typeName);
    elementType = document.createElement(elementType);

    elementType.classList.add("styleType");
    elementType.setAttribute("id",typeName1);

    dragTag = document.createElement("div");
    dragTag.classList.add("styleHeader");
    dragTag.setAttribute("id",typeName);
    dragTag.appendChild(document.createTextNode("Click here to move"));
    elementType.appendChild(dragTag);

    elementType.appendChild(document.createTextNode(elementValue));
    let color = document.getElementById("color").value;
    document.getElementById("userbody").appendChild(elementType).style.color = color;
    
    dragElement(document.getElementById(typeName1));
}

//make object dragable
// Make the DIV element draggable:
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var image= document.getElementById("imageupload").style.display="none";
var img; 

function imageUpload(){
    let type = document.
        getElementById("elementType").value;
    console.log(type);
    var image= document.getElementById("imageupload")
    if(type=="img"){
        image.style.display="block";
    }else{
        image.style.display="none";
    }
}

function loadimage(e){
    img=document.createElement('img');
    img.src= URL.createObjectURL(e.target.files[0]);
    img.width=1000;
    img.width=1000;
    document.getElementById("userbody").appendChild(img);
}
