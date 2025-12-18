var frutas = ["uva", "pera", "manzana"];

frutas.push('banana');
frutas.unshift('durazno')

frutas.pop()
frutas.shift()

let frutasSize = frutas.length;

console.log(frutas);
console.log(frutasSize);

var frutasForEach = frutas.forEach(function(fruta){
    return fruta.toUpperCase();
});

console.log('======================================')

var frutasMap = frutas.map(function(fruta){
    return fruta.toUpperCase();
});

console.log(frutasForEach);
console.log(frutasMap);