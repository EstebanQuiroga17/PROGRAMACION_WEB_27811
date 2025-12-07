var btn_temperatura = document.getElementById('btn_calcular_temps')

btn_temperatura.addEventListener('click', function(event){

    let temperatura = document.getElementById('temperatura').value

    let far = ((temperatura * 9/5) + 32).toFixed(2)
    let celsius = ((far - 32)*5/9).toFixed(2)

    temperatura_celsius.innerHTML = celsius
    temperatura_far.innerHTML = far
})