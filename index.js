function addItem() {
  let elementType = document.getElementById("elementType").value;
console.log(elementType)
  let elementValue = document.getElementById("value").value;

  elementType = document.createElement(elementType);
  console.log(elementType)
  let color = document.getElementById("color").value;


  elementType.appendChild(document.createTextNode(elementValue));

  //   document.getElementById("parent").appendChild(elementType);

  document.getElementById("userbody").appendChild(elementType).style.color = color;
}
