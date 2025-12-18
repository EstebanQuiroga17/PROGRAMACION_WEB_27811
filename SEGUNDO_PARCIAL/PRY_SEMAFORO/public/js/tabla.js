var btn_mostrar_tabla = document.getElementById('btn_mostrar_tabla')
var btn_limpiar_tabla = document.getElementById('btn_limpiar_tabla')
var txt_resultado = document.getElementById('txt_resultado')

btn_mostrar_tabla.addEventListener('click', function(event){
    var numero = document.getElementById('numero').value
    var resultado = ""
    
    if(!numero){
        txt_resultado.textContent = "Elija un numero"
        return
    }
    
    for(let i = 1; i <= 12; i ++){

        let res = ` ${numero} x ${i} = ${numero * i} <br>`
        resultado += res;
    }

    txt_resultado.innerHTML = resultado
}) 

btn_limpiar_tabla.addEventListener('click', function(){
    txt_resultado.innerHTML = '';
})