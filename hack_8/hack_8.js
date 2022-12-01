/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let aux=["bar","baz","qux"];
let result = [];

result=arr.filter(function(cadena){
  return aux.includes(cadena);  
})

result= result.map(function(cadena){
  return cadena.includes('a')?cadena.replace('a','@'):cadena;
})

let ulti=result.length-1;
result[ulti]=result[ulti].toUpperCase();

//export result
module.exports = result;