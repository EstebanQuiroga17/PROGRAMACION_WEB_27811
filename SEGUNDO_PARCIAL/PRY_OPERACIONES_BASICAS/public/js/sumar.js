//DECLARAR E INSTANCIAR VARIABLE
var btn_sumar = document.getElementById('btn_sumar')
//ACCEDEMOS AL EVENTO CLICK

btn_sumar.addEventListener('click', function(event){

    //CAPTURAMOS EL VALOR DE LAS ENTRADAS
    let n1 = document.getElementById('txt_num1').value
    let n2 = document.getElementById('txt_num2').value
    
    let txt_resultado_suma = document.getElementById('txt_resultado_suma')

    //innerHtml para mostrar/actualizar el resultado
    txt_resultado_suma.innerHTML = (parseFloat(n1) + parseFloat(n2)).toFixed(2)
});



