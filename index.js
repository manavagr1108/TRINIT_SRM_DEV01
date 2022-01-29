// add items
function addItem() {
    let type = document.getElementById("type").value;

    let value = document.getElementById("value").value;

    var typeName1 = type;
    var typeName = type + " header";
    console.log(typeName);
    type = document.createElement(type);

    type.classList.add("styleType");
    type.setAttribute("id",typeName1);

    dragTag = document.createElement("div");
    dragTag.classList.add("styleHeader");
    dragTag.setAttribute("id",typeName);
    dragTag.appendChild(document.createTextNode("Click here to move"));
    type.appendChild(dragTag);

    type.appendChild(document.createTextNode(value));

    
    document.getElementById("parent").appendChild(type);
    
    dragElement(document.getElementById(typeName1));
}


//make object dragable
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));
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