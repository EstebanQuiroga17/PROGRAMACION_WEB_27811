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
    
    for(let i = 1; i <= numero; i+=2){
        if(numero % 2 > 0 && i == numero){
            let res = ` ${i}`
            resultado += res;
        }else{
            let res = ` ${i} || ${i + 1} <br>`
            resultado += res;
        }
    }

    txt_resultado.innerHTML = resultado
}) 

btn_limpiar_tabla.addEventListener('click', function(){
    txt_resultado.innerHTML = '';
})