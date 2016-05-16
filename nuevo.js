var data = require('./data');

var productos_filtrados = data.products.filter(function (product){
	return product.product_type.toLowerCase()=== 'lamp' ||
	product.product_type.toLowerCase()=== 'wallet'
});

//console.log(productos_filtrados.length)


var items = productos_filtrados.map(function(precios){

	return precios.variants;

//console.log(items)

});


/*var precios_unitarios = items.map(function (argument) {
	 
	 if (items.product_id === '2759183939')

	 	return argument.price;
});

	console.log(precios_unitarios);*/

var precios_tipo = items.reduce(function (acc, elem) {
	 return acc.concat(elem);
}, []);

//console.log('totalAges:', precios_unidad);

var suma = precios_tipo.reduce(function (cont, elemento){
	return cont + +elemento.price
}, 0);

console.log('totalPrecios:', suma);

var lampsandwallets = function (products){
	return products.product_type.toLowerCase() === 'wallet' ||
    products.product_type.toLowerCase() === 'lamp';
}

var tipos = function (elementos){
	return elementos.variants;
}

var precios_tipo = function (cont, element)
{
	return cont.concat(element)
}

var total_precio = function (acc, element)
{
	return acc + +element.price
}

var total_todo = data.products
	.filter(lampsandwallets)
	.map(tipos)
	.reduce(precios_tipo, [])
	.reduce(total_precio, 0)

console.log("Total de precios de billeteras y lamparas: " + total_todo)