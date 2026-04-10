console.log("PROYECTO NOTAS");

// arreglo de objetos con datos
const aprendices = [
    { nombre: "Ana", nota: 4.5, programa: "ADSO" },
    { nombre: "Luis", nota: 2.8, programa: "ADSO" },
    { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
    { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
    { nombre: "Sofía", nota: 5.0, programa: "Diseño Web" }
];

console.log("MENU");
console.log("1 Todos");
console.log("2 Aprobados");
console.log("3 Reprobados");
console.log("4 Mayúsculas");
console.log("5 Promedio");
console.log("6 Ordenar");
console.log("7 Clasificación");
console.log("8 Todo");

// variable para probar opciones
let opcion = 8;

switch(opcion){

    case 1:
        // muestra todo el arreglo
        console.log(aprendices);
    break;

    case 2:
        // filter sirve para filtrar datos (nota >= 3)
        console.log(aprendices.filter(a => a.nota >= 3));
    break;

    case 3:
        // filter para reprobados
        console.log(aprendices.filter(a => a.nota < 3));
    break;

    case 4:
        // map transforma datos (nombre a mayúscula)
        console.log(aprendices.map(a => a.nombre.toUpperCase()));
    break;

    case 5:
        // reduce suma todas las notas para sacar promedio
        let prom = aprendices.reduce((acc,a)=> acc + a.nota,0) / aprendices.length;
        console.log(prom);
    break;

    case 6:
        // sort ordena de menor a mayor
        console.log([...aprendices].sort((a,b)=> a.nota - b.nota));
    break;

    case 7:
        // switch para clasificar notas
        aprendices.forEach(a => {
            if(a.nota >= 5) console.log(a.nombre + " Superior");
            else if(a.nota >= 4) console.log(a.nombre + " Alto");
            else if(a.nota >= 3) console.log(a.nombre + " Básico");
            else console.log(a.nombre + " Bajo");
        });
    break;

    case 8:
        // todo junto (usa varios métodos)
        console.log(aprendices);

        console.log(aprendices.filter(a => a.nota >= 3));

        console.log(aprendices.filter(a => a.nota < 3));

        console.log(aprendices.map(a => a.nombre.toUpperCase()));

        let p = aprendices.reduce((acc,a)=> acc + a.nota,0) / aprendices.length;
        console.log(p);

        console.log([...aprendices].sort((a,b)=> a.nota - b.nota));
    break;

    default:
        console.log("mal");
}
