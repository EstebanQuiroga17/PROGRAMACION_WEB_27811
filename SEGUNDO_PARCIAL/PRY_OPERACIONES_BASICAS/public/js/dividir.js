var btn_dividir = document.getElementById('btn_dividir')

btn_dividir.addEventListener('click', function(event){

    //CAPTURAMOS EL VALOR DE LAS ENTRADAS
    let n1 = document.getElementById('txt_num7').value
    let n2 = document.getElementById('txt_num8').value
    
    let txt_resultado_suma = document.getElementById('txt_resultado_division')

    //innerHtml para mostrar/actualizar el resultado
    txt_resultado_suma.innerHTML = (parseFloat(n1) / parseFloat(n2)).toFixed(2)
});