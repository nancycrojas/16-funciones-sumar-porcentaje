//sumarPorcentaje(numero, porcentaje)
//Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar

//sumarPorcentaje(100, 15) // 115
//sumarPorcentaje(10, 50) // 15
//sumarPorcentaje(200, 10) // 220


const sumarPorcentaje = (numero, porcentaje) =>{
   return numero + (numero * porcentaje / 100);
}

console.log(sumarPorcentaje(100, 15));
console.log(sumarPorcentaje(10, 50));
console.log(sumarPorcentaje(200, 10));