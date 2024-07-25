var inp = document.querySelector("#inp-qr");

var img = document.querySelector("#img-or");

var btn = document.querySelector("button");

btn.addEventListener("click" , function() {

    img.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ inp.value ;
})