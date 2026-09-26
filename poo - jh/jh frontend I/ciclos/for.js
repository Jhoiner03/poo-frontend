//Crear una tabla de multiplicar
//127 * 3 = 371
//127 * 4 = 
/*
let nro = Number(prompt("Numero"))
let i

for (i=1; i<11; i++){
    console.log(`${nro} * ${i} = ${nro * i}`)
    //console.log(nro + " * " + i + " = " + (nro * i))
}
*/
//contadores y acumuladores
//digitar la nota final de un grupo de 50 estudiantes, imprimir ganan, pierden y el promedio

let contPerder = 0
let contGanan = 0 
let acumNotas = 0
let i
for (i=0; i<4; i++){
    let nota = Number(prompt("Nota"))
    nota < 3 ? contPerder++ : contGanan++
    acumNotas += nota
}
alert("valor de i" + i)
let promedio = acumNotas / i
console.log(`***Informe Academico***
    Ganaron--> ${contGanan}
    Perdieron> ${contPerder}
    Promedio-> ${promedio}
`)