function addItem() {
  let elementType = document.getElementById("elementType").value;

  let elementValue = document.getElementById("value").value;

  elementType = document.createElement(elementType);

  elementType.appendChild(document.createTextNode(elementValue));

  document.getElementById("parent").appendChild(elementType);
}
