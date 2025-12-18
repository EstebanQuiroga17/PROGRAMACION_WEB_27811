var btn_mostrar_numero = document.getElementById('btn_mostrar_numero')
var txt_resultado = document.getElementById('txt_resultado')

btn_mostrar_numero.addEventListener('click', function(event){
    let numeros = ""

    for(i = 1; i <= 10; i++){
        numeros += ` ${i}`; 
    }

    txt_resultado.innerHTML = numeros;
})