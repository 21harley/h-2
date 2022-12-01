/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;
result=arr.filter(function(cadena){
    return cadena[0].toLowerCase()=='b'
}).length

//export result
module.exports = result;