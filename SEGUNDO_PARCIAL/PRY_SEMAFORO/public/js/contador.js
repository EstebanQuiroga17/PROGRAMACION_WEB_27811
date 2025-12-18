
var btn_mostrar_numero = document.getElementById('btn_mostrar_numero')
var txt_resultado =  document.getElementById('txt_resultado')

function contar(inicio, fin){
    let numeros = ""
    for(let i = inicio; i<=fin ; i++){
        numeros += ` ${i} <br>`; 
    }
    txt_resultado.innerHTML = numeros;
}


btn_mostrar_numero.addEventListener('click', function(event){
    var inicio = parseInt(document.getElementById('inicio').value)
    var fin = parseInt(document.getElementById('fin').value)
    if(inicio < fin){
        contar(inicio,fin)
    }else{
        contar(fin,inicio)
    }
});