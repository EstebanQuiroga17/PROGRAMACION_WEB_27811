var btn_restar = document.getElementById('btn_restar')
btn_restar.addEventListener('click', function(event){

    //CAPTURAMOS EL VALOR DE LAS ENTRADAS
    let n1 = document.getElementById('txt_num3').value
    let n2 = document.getElementById('txt_num4').value
    
    let txt_resultado_suma = document.getElementById('txt_resultado_resta')

    //innerHtml para mostrar/actualizar el resultado
    txt_resultado_suma.innerHTML = (parseFloat(n1) - parseFloat(n2)).toFixed(2)
});