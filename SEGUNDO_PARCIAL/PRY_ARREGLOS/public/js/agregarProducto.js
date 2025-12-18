var btn_agregar = document.getElementById('btn_agregar');
var arreglo_productos = [];
var nombre_producto = '';
var lst_productos;


function obtenerDatos(){
    nombre_producto = document.getElementById('producto').value.trim();
    lst_productos = document.getElementById('lst_productos');
}

btn_agregar.addEventListener('click', function(event){

    obtenerDatos();

    if(nombre_producto != ''){

        var elementoLi = document.createElement('li');
        elementoLi.classList.add('list-group-item');
        elementoLi.innerText = nombre_producto;

        lst_productos.appendChild(elementoLi);

        arreglo_productos.push(nombre_producto);

    
        document.getElementById('producto').value = '';

    }else{
        console.log('Ingrese un producto valido.')
    }

    console.log(arreglo_productos);
})

var btn_borrar = document.getElementById("btn_borrar");

btn_borrar.addEventListener('click', function(event){
    obtenerDatos();
    if(nombre_producto != ''){
        let indice = arreglo_productos.indexOf(nombre_producto);
        if(indice > -1){
            arreglo_productos.splice(indice, 1);
            let elementoAEliminar = lst_productos.children[indice];
            if(elementoAEliminar){
                lst_productos.removeChild(elementoAEliminar);
            } else {
                console.log('No se encontró el elemento DOM correspondiente para eliminar.');
            }
        } else {
            console.log('Producto no encontrado en el arreglo.');
        }
    }else{
        console.log('Ingrese un producto valido para borrar.')
    }
    console.log(arreglo_productos);
});
