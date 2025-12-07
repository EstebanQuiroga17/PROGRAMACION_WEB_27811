var btn_multiplicar = document.getElementById('btn_multiplicar')

btn_multiplicar.addEventListener('click', function(event){

    //CAPTURAMOS EL VALOR DE LAS ENTRADAS
    let n1 = document.getElementById('txt_num5').value
    let n2 = document.getElementById('txt_num6').value
    
    let txt_resultado_suma = document.getElementById('txt_resultado_multiplicacion')

    //innerHtml para mostrar/actualizar el resultado
    txt_resultado_suma.innerHTML = (parseFloat(n1) * parseFloat(n2)).toFixed(2)
});
