var data = require('./data');

// console.log(data.products.length);

// data.products.forEach(function (product) {
//   console.log(product.product_type);
// });


//solo para product_type === 'Pants'

var pants = data.products.filter(function (product) {
  return product.product_type === 'Pants';
});
//console.log(pants);

//string a numero
// +'123'
// parseInt(123)
// parseInt(123, 10)

// var sum = 0;
// for (var i = 0, len = pants.length; i < len; i++) {
//   for (var j = 0, len2 = pants[i].variants.length; j < len2; j++) {
//     sum += +pants[i].variants[j].price;
//   }
// }

// console.log('sum', sum);

var variants2Dim = pants.map(function (p) {
  return p.variants;
});
// console.log(variants);
// console.log(JSON.stringify(variants));

// var oneDim = [];
// for (var i = 0 , len = variants2Dim.length; i < len; i ++) {
//   oneDim = oneDim.concat(variants2Dim[i]);
// }
// console.log('for', oneDim.length);

// var variants1Dim = variants2Dim.flatten();
var variants1Dim = variants2Dim
  .reduce(function (acc, elem) {
    return acc.concat(elem);
  }, []);
// console.log('reduce', variants1Dim.length);

var sum = variants1Dim
  .reduce(function (acc, v) {
    return acc + +v.price;
  }, 0);
console.log('sum', sum);

// var a = {b: 4};
//'{"b": 4}';
// JSON.stringify(a)
//JSON.parse('{"b": 4}'); // te devuelve un objeto

// console.log(variants1Dim);
// console.log(JSON.stringify(variants1Dim));
// var onlyPants = function(p) {
//   return p.product_type === 'Pants';
// }
var onlyLampAndWallet = function(p) {
  return p.product_type === 'Wallet' ||
    p.product_type === 'Lamp';
};

var getVariants = function (p) {
  return p.variants;
};

var sumPrice = function (acc, v) {
  return acc + +v.price;
};

var flatten = function (acc, variants) {
  return acc.concat(variants);
};
var gg = data.products
  .filter(onlyLampAndWallet)
  .map(getVariants)
  .reduce(flatten, [])
  .reduce(sumPrice, 0);


console.log('sum2', gg);
