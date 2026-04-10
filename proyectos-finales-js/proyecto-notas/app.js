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

function menu(){

    console.log("\nMENU");
    console.log("1 Todos");
    console.log("2 Aprobados");
    console.log("3 Reprobados");
    console.log("4 Mayus");
    console.log("5 Promedio");
    console.log("6 Ordenar");
    console.log("7 Clasificar");
    console.log("8 Salir");

    rl.question("op: ", (op)=>{

        op = parseInt(op);

        switch(op){

            case 1:
                console.log(aprendices);
            break;

            case 2:
                // filter
                console.log(aprendices.filter(a => a.nota >= 3));
            break;

            case 3:
                console.log(aprendices.filter(a => a.nota < 3));
            break;

            case 4:
                // map
                console.log(aprendices.map(a => a.nombre.toUpperCase()));
            break;

            case 5:
                // reduce
                let p = aprendices.reduce((a,b)=> a + b.nota,0) / aprendices.length;
                console.log(p);
            break;

            case 6:
                // sort mayor a menor
                console.log([...aprendices].sort((a,b)=> b.nota - a.nota));
            break;

            case 7:
                // switch clasificacion
                aprendices.forEach(a => {

                    let t;

                    if(a.nota < 3) t = "bajo";
                    else if(a.nota == 3) t = "basico";
                    else if(a.nota == 4) t = "alto";
                    else if(a.nota == 5) t = "superior";

                    switch(t){
                        case "bajo":
                            console.log(a.nombre + " Bajo");
                        break;
                        case "basico":
                            console.log(a.nombre + " Básico");
                        break;
                        case "alto":
                            console.log(a.nombre + " Alto");
                        break;
                        case "superior":
                            console.log(a.nombre + " Superior");
                        break;
                    }
                });
            break;

            case 8:
                console.log("salir");
                rl.close();
                return;

            default:
                console.log("mal");
        }

        menu(); // se repite (while)
    });
}

menu();
