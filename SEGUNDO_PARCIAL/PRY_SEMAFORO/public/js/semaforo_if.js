var seleccionado = document.querySelectorAll('input[name="color"]');
var txt_resultado = document.getElementById("txt_resultado");

function validarSemaforo(color){
    switch(color){
            case "radio_rojo":
                txt_resultado.innerText = "ALTO";
                break;
            case "radio_amarillo":
                txt_resultado.innerText = "PRECAUCION";
                break;
            case "radio_verde":
                txt_resultado.innerText = "AVANCE";
                break;
        }
}

const radiosArray = [...seleccionado];

var checked = radiosArray.some(radio =>{
    if(radio.checked){
        validarSemaforo(radio.id);
        return true;
    }else{
        return false;
    }
});

if(!checked){
    txt_resultado.innerText = "selecciona";
}


seleccionado.forEach(radio =>{
    radio.addEventListener("change", function(event){
        validarSemaforo(radio.id);
    }
    );

});

