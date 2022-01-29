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

function addItem() {
  let elementType = document.getElementById("elementType").value;
console.log(elementType)
  let elementValue = document.getElementById("value").value;

  elementType = document.createElement(elementType);
  console.log(elementType)
  let color = document.getElementById("color").value;


  elementType.appendChild(document.createTextNode(elementValue));

        document.getElementById("userbody").appendChild(elementType).style.color = color;
}
