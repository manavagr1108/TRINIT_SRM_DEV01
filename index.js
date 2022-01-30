//adding basic elements to the userbody
function addItem() {
  let elementType = document.getElementById("elementType").value;
  let elementValue = document.getElementById("value").value;
  if (elementValue.length > 0) { // checking if the input is value is given or not
    var id = "id" + Math.random().toString(16).slice(2);  // giving random id to the div so that the elements can be moved
    if (elementType === "button") {   // special case for button as we are adding bootstrap class to the button
      console.log("button");
      elementType = document.createElement(elementType);
      elementType.setAttribute("type", "button");
      elementType.classList.add("btn");
    }
    else {
      elementType = document.createElement(elementType);
    }

    //adding various styles to the normal input fields
    elementType.classList.add("styleType");
    elementType.setAttribute("id", id);

    elementType.appendChild(document.createTextNode(elementValue));
    let color = document.getElementById("color").value;
    let BackgroundColor = document.getElementById("Bgcolor").value;
    let fontsize = (document.getElementById("fontsize").value).toString() + "px";
    let fontStyle = document.getElementById("fontStyle").value;
    let fontWeight= document.getElementById("fontWeight").value
    let fontFamily= document.getElementById("fontFamily").value
    let width=document.getElementById("elemwidth").value.toString()+"px";
    let textAlign=document.getElementById("textAlign").value;
    elementType.style.color = color
    elementType.style.backgroundColor = BackgroundColor
    elementType.style.setProperty('font-size',fontsize)
    elementType.style.setProperty('font-style',fontStyle)
    elementType.style.setProperty('font-weight',fontWeight)
    elementType.style.setProperty('font-family',fontFamily)
    elementType.style.setProperty('width',width)
    elementType.style.setProperty('text-align',textAlign)

    
    // appending the created div to the parent div of id="userBody"
    document.getElementById("userbody").appendChild(elementType);

    dragElement(document.getElementById(id)); // enableing draggable feature for elements
  }
}

//make object dragable
// Make the DIV element draggable:
function dragElement(element) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(element.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(element.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    element.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// getting the input form Id and setting their display to none except basicTags
var image = (document.getElementById("imageupload").style.display = "none");
var card = (document.getElementById("cardupload").style.display = "none");
var basicTags = (document.getElementById("basicTags"));
var navbar= document.getElementById("navbarupload").style.display="none";
var footer=document.getElementById("footerupload").style.display="none";


//function to create NavBar
function loadNavBar(){
  console.log("x");
  var id = "id" + Math.random().toString(16).slice(2);
  var e1=document.getElementById("navbarelement1").value;
  var e2=document.getElementById("navbarelement2").value;
  var e3=document.getElementById("navbarelement3").value;
  var e4=document.getElementById("navbarelement4").value;
  const navbar = `<ul class="nav nav-pills ">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">${e1}</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">${e4}</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">${e2}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">${e3}</a>
  </li>
</ul>`
  elementType = document.createElement("div");
  elementType.style.width="60vw";
  elementType.classList.add("styleType");
  elementType.setAttribute("id", id);
  elementType.insertAdjacentHTML("beforeend", navbar);
  document.getElementById("userbody").appendChild(elementType);
  dragElement(document.getElementById(id));
}

//funtion to create Footer
function loadFooter(){
  var id = "id" + Math.random().toString(16).slice(2);
  var e1=document.getElementById("footerText").value;
  const footer = `<footer class="text-center text-white" style="background-color: #f1f1f1;">
  <!-- Copyright -->
  <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-dark" href="#">${e1}.com</a>
  </div>
  <!-- Copyright -->
</footer>`
  elementType = document.createElement("div");
  elementType.style.width="60vw";
  elementType.classList.add("styleType");
  elementType.setAttribute("id", id);
  elementType.insertAdjacentHTML("beforeend", footer);
  document.getElementById("userbody").appendChild(elementType);
  dragElement(document.getElementById(id));
}


//funtion to create cards
function loadCard(e) {
  console.log(e.target);
  var title=document.getElementById("cardtitle").value;
  var content=document.getElementById("content").value;
  var src = URL.createObjectURL(e.target.files[0]);
  var id = "id" + Math.random().toString(16).slice(2);
  const card = `<div class="card" style="width: 18rem; padding:15px;">
  <img src=${src} class="card-img-top" alt="card image">
  <div class="card-body">
    <h5 class="card-title" >${title}</h5>
    <p class="card-text">${content}</p>
  </div>
</div>`
  elementType = document.createElement("div");
  elementType.classList.add("styleType");
  elementType.setAttribute("id", id);
  elementType.insertAdjacentHTML("beforeend", card);
  document.getElementById("userbody").appendChild(elementType);
  dragElement(document.getElementById(id));
}

//funtion to enable various input form divs
function imageUpload() {
  let type = document.getElementById("elementType").value;
  var image = document.getElementById("imageupload");
  var card = document.getElementById("cardupload");
  var navbar = document.getElementById("navbarupload");
  var footer=document.getElementById("footerupload");
  if (type === "img") {
    image.style.display = "block";
    basicTags.style.display = "none";
    card.style.display = "none";
  }
  else if (type === "card") {
    card.style.display = "block";
    basicTags.style.display = "none";
    image.style.display = "none";
    footer.style.display="none";
    navbar.style.display="none";
  }else if(type=="navbar"){
    card.style.display="none";
    basicTags.style.display="none";
    image.style.display="none";
    navbar.style.display="block";
    footer.style.display="none";
  }else if(type=="footer"){
    card.style.display="none";
    basicTags.style.display="none";
    image.style.display="none";
    navbar.style.display="none";
    footer.style.display="block";
  } else {
    card.style.display = "none";
    basicTags.style.display = "block";
    image.style.display = "none";
    navbar.style.display="none";
    footer.style.display="none";
  }
}

//funtion to insert image
function loadimage(e) {
  console.log(e.target);
  console.log("Manav");
  var id = "id" + Math.random().toString(16).slice(2);
  elementType = document.createElement("img");
  elementType.src = URL.createObjectURL(e.target.files[0]);
  let height = document.getElementById("height").value;
  let width = document.getElementById("width").value;
  elementType.width = width;
  elementType.width = height;

  elementType.classList.add("styleType");
  elementType.setAttribute("id", id);

  document.getElementById("userbody").appendChild(elementType);
  dragElement(document.getElementById(id));
}

//deleting elements on double click
document.getElementById("userbody").addEventListener("dblclick", (event) => {
  let deleteElemId= event.srcElement.id;
  let deleteElem= document.getElementById(deleteElemId);
  deleteElem.remove();
});


//to display the css property of a div
document.getElementById("userbody").addEventListener("click", (event) => {
  if(document.getElementById("cssDisplay")){
    document.getElementById("cssDisplay").remove();
  }
  console.log(event);
  var cssObject = getComputedStyle(event.target);
  var fontFamily= event.target.style.fontFamily || cssObject.fontFamily;
  var fontStyle = event.target.style.fontStyle || cssObject.fontStyle;
  var fontSize = event.target.style.fontSize || cssObject.fontSize;
  var fontColor = event.target.style.fontColor || cssObject.color;
  var fontWeight= event.target.style.fontWeight || cssObject.fontWeight;
  var backgroundColor=event.target.style.backgroundColor || cssObject.backgroundColor;
  var top=event.target.style.top || cssObject.top;
  var bottom=event.target.style.bottom || cssObject.bottom;
  var left=event.target.style.left || cssObject.left;
  var right=event.target.style.right || cssObject.right;

  const displayCss = `<div id="cssDisplay" style="color:black; background-color: #add8e6; border-radius: 2rem; padding-left:1rem; padding-bottom:1rem">
  <br>
  <h5><b>Element CSS:</b></h5>
  <p>{<br>
    font-family: ${fontFamily}; <br>
    font-style: ${fontStyle};<br>
    font-size: ${fontSize};<br>
    font-weight: ${fontWeight}; <br>
    color: ${fontColor};<br>
    backgound-color: ${backgroundColor};<br>
    top: ${top};<br>
    bottom: ${bottom};<br>
    left: ${left};<br>
    right: ${right};<br>
  }</p>
  </div>`
  document.getElementById("form").insertAdjacentHTML("beforeend", displayCss);
});


// to highlight the div when mouse is on the div
document.getElementById("userbody").addEventListener("mouseover", (event) => {
  if(event.target.id == "userbody")
  event.target.style.setProperty("border" ,  "0px solid cyan")
  else
  event.target.style.setProperty("border" ,  "2px solid cyan")
})

// to remove the highlight of the selected div
document.getElementById("userbody").addEventListener("mouseout", (event) => {
  event.target.style.setProperty("border" ,  "0px solid blue")
})
