console.log("TIENDA");

// readline para poder escribir en consola
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// arreglo de productos
const productos = [
 { id: 1, nombre: "Mouse", categoria: "Periférico", precio: 50000, stock: 10, ventas: 12 },
 { id: 2, nombre: "Teclado", categoria: "Periférico", precio: 120000, stock: 5, ventas: 7 },
 { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
 { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
 { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];

function menu(){

    console.log("\nMENU");
    console.log("1 Ver todo");
    console.log("2 Stock bajo");
    console.log("3 Agotados");
    console.log("4 Nombre y precio");
    console.log("5 Inventario");
    console.log("6 Ventas");
    console.log("7 Ordenar");
    console.log("8 Buscar");
    console.log("9 Validar");
    console.log("10 Precio");
    console.log("11 Extras");
    console.log("12 Reporte");
    console.log("13 Salir");

    rl.question("Opcion: ", (op)=>{

        op = parseInt(op);

        switch(op){

            case 1:
                // muestra todos los productos
                console.log(productos);
            break;

            case 2:
                // filter para stock bajo
                console.log(productos.filter(p => p.stock < 5));
            break;

            case 3:
                // filter para agotados
                console.log(productos.filter(p => p.stock == 0));
            break;

            case 4:
                // map para mostrar nombre y precio
                console.log(productos.map(p => p.nombre + " $" + p.precio));
            break;

            case 5:
                // reduce para calcular inventario (precio * stock)
                let inv = productos.reduce((a,p)=> a + (p.precio * p.stock),0);
                console.log(inv);
            break;

            case 6:
                // reduce suma ventas
                let ven = productos.reduce((a,p)=> a + p.ventas,0);
                console.log(ven);
            break;

            case 7:
                // sort para ordenar
                console.log([...productos].sort((a,b)=> a.precio - b.precio));
                console.log([...productos].sort((a,b)=> b.ventas - a.ventas));
            break;

            case 8:
                // find busca un producto
                rl.question("nombre: ", (n)=>{
                    let b = productos.find(p => p.nombre.toLowerCase() == n.toLowerCase());
                    console.log(b ? b : "no esta");
                    menu();
                });
                return;

            case 9:
                // some verifica si hay al menos uno
                console.log(productos.some(p => p.stock == 0));
                // every verifica si todos cumplen
                console.log(productos.every(p => p.stock > 0));
            break;

            case 10:
                // clasificación simple de precio
                rl.question("precio: ", (pr)=>{
                    pr = parseInt(pr);

                    if(pr < 50000) console.log("bajo");
                    else if(pr <= 200000) console.log("medio");
                    else console.log("alto");

                    menu();
                });
                return;

            case 11:
                // combinaciones de métodos

                // filter + sort
                console.log(productos.filter(p=> p.stock > 0).sort((a,b)=> a.precio - b.precio));

                // filter + map
                console.log(productos.filter(p=> p.stock == 0).map(p=> "reabastecer " + p.nombre));

                // reduce
                let t = productos.reduce((a,p)=> a + (p.precio * p.stock),0);
                console.log(t);

                // sort para obtener el primero
                console.log([...productos].sort((a,b)=> b.ventas - a.ventas)[0]);
                console.log([...productos].sort((a,b)=> b.precio - a.precio)[0]);
            break;

            case 12:
                // reporte final

                let op1 = [...productos].sort((a,b)=> a.precio - b.precio);
                let op2 = [...productos].sort((a,b)=> b.ventas - a.ventas);

                console.log(op1[op1.length - 1]); // más caro
                console.log(op1[0]); // más barato
                console.log(op2[0]); // más vendido

                let i = productos.reduce((a,p)=> a + (p.precio * p.stock),0);
                let v = productos.reduce((a,p)=> a + p.ventas,0);
                let ag = productos.filter(p=> p.stock == 0).length;

                console.log(i);
                console.log(v);
                console.log(ag);
            break;

            case 13:
                console.log("salir");
                rl.close();
                return;

            default:
                console.log("mal");
        }

        menu(); // se repite (como while)
    });
}

menu();
