const Name = document.getElementById("name");
const prize = document.getElementById("prize");
const inventory = document.getElementById("inventory");
const form = document.getElementById("form");
const listInput = document.querySelectorAll(".form.group") 

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(Name.value.length < 1 || Name.value.trim() == ""){
        let elemento =  document.querySelector(".name");
        elemento.lastElementChild.innerHTML = "campo requerido"

    }

    if(prize.value.length < 1 || prize.value.trim() == ""){
        let elemento =  document.querySelector(".prize");
        elemento.lastElementChild.innerHTML = "campo requerido"
    }

    if(inventory.value.length < 1 || inventory.value.trim() == ""){
        let elemento =  document.querySelector(".inventory");
        elemento.lastElementChild.innerHTML = "campo requerido"
    }


});

const boton = document.getElementById('alerta');
boton.addEventListener('click', function(){
    alert('haz creado un nuevo producto');
})