/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const f = Object.entries(objeto);
   return(f);

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let resultado={}; 

    for(let i=0; i < string.length; i++){
        if (resultado[string[i]]){ 
            resultado[string[i]]++;
         }
        else{ 
            resultado[string[i]]=1; 
         }
      }
   return (resultado);
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayuscula = "";
   var minuscula = "";
   for (var index = 0; index < string.length; index++) {
      if (string[index] === string[index].toLowerCase()) {
         minuscula = minuscula + string[index];
      }else{
         mayuscula = mayuscula + string[index];
      }
   }
   return(mayuscula + minuscula);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var invertirString = frase.split(" ");
   var arrayFinal = invertirString.map(function(i){
      return(i.split("").reverse().join(""));
   });
   return(arrayFinal.join(" "));
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num = numero.toString();
   var numReverso = num.split("").reverse().join("");
   if (num === numReverso) {
      return("Es capicua");
   } else {
      return("No es capicua");
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var letras = "";
   for (var index = 0; index < string.length; index++) {
      if(string[index] === "a" || string[index] === "b" || string[index] === "c" ){
         continue;
      }else{
         letras += string[index];
      }
   }
   return(letras);
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var longitud = true;
   while (longitud) {
      longitud = false;
      for (var index = 0; index < arrayOfStrings.length - 1; index++) {
         if (arrayOfStrings[index].length > arrayOfStrings[index+1].length) {
            var ahoraLongitud = arrayOfStrings[index];
            arrayOfStrings[index] =  arrayOfStrings[index+1];
            arrayOfStrings[index+1] =  ahoraLongitud;
            longitud = true;
         }
      } 
   }
   return(arrayOfStrings);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interseccion = [];
   for (var index = 0; index < array1.length; index++) {
      for (var elemento = 0; elemento < array2.length; elemento++) {
         if (array1[index] === array2[elemento]) {
            interseccion.push(array1[index]);
         }
      }
   }
   return(interseccion);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
