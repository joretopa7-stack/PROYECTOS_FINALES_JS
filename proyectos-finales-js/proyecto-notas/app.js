console.log("PROYECTO NOTAS");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const aprendices = [
    { nombre: "Ana", nota: 4.5, programa: "ADSO" },
    { nombre: "Luis", nota: 2.8, programa: "ADSO" },
    { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
    { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
    { nombre: "Sofía", nota: 5.0, programa: "Diseño Web" }
];

let op = 0;

function menu(){

    console.log("\nMENU");
    console.log("1. Todos los estudiantes");
    console.log("2. Estudiantes aprobados");
    console.log("3. Estudiantes reprobados");
    console.log("4. Estudiantes en mayúsculas");
    console.log("5. Promedio de notas");
    console.log("6. Ordenar notas mayor a menor");
    console.log("7. Clasificación");
    console.log("8. Salir");

    rl.question("Digite opción: ", (resp) => {

        op = parseInt(resp);

        switch(op){

            case 1:
                console.log(aprendices);
            break;

            case 2:
                console.log(aprendices.filter(a => a.nota >= 3));
            break;

            case 3:
                console.log(aprendices.filter(a => a.nota < 3));
            break;

            case 4:
                console.log(aprendices.map(a => a.nombre.toUpperCase()));
            break;

            case 5:
                let prom = aprendices.reduce((acc,a)=> acc + a.nota,0) / aprendices.length;
                console.log(prom);
            break;

            case 6:
                console.log([...aprendices].sort((a,b)=> a.nota - b.nota));
            break;

            case 7:
                aprendices.forEach(a => {
                    if(a.nota === 5) console.log(a.nombre + " Superior");
                    else if(a.nota >= 4) console.log(a.nombre + " Alto");
                    else if(a.nota >= 3) console.log(a.nombre + " Básico");
                    else console.log(a.nombre + " Bajo");
                });
            break;

            case 8:
                console.log("Chao");
                rl.close();
                return;

            default:
                console.log("Esa no es");
        }

        menu(); //repite (como while)
    });
}

menu();