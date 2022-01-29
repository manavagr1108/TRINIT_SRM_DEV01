function addItem() {
    let type = document.
        getElementById("type").value;

    let value = document.
        getElementById("value").value;

        let color = document.
        getElementById("color").value;

    type
        = document.createElement(type);

    type.appendChild(
        document.createTextNode(value));

    document.getElementById(
        "parent").appendChild(type).style.color=color
}