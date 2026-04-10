console.log("TIENDA");

// para poder escribir en consola
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// datos de los productos
const productos = [
 { id: 1, nombre: "Mouse", categoria: "Periférico", precio: 50000, stock: 10, ventas: 12 },
 { id: 2, nombre: "Teclado", categoria: "Periférico", precio: 120000, stock: 5, ventas: 7 },
 { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
 { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
 { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];

function menu(){

    console.log("\nMENU");
    console.log("1 ver");
    console.log("2 stock bajo");
    console.log("3 agotados");
    console.log("4 nombre precio");
    console.log("5 inventario");
    console.log("6 ventas");
    console.log("7 ordenar");
    console.log("8 buscar");
    console.log("9 validar");
    console.log("10 precio");
    console.log("11 extras");
    console.log("12 reporte");
    console.log("13 salir");

    rl.question("op: ", (op)=>{

        op = parseInt(op);

        switch(op){

            case 1:
                // muestra todos los productos
                console.log(productos);
            break;

            case 2:
                // filter: filtra los que tienen poco stock
                console.log(productos.filter(p => p.stock < 5));
            break;

            case 3:
                // filter: muestra los que ya no tienen stock
                console.log(productos.filter(p => p.stock == 0));
            break;

            case 4:
                // map: transforma los datos a texto
                console.log(productos.map(p => p.nombre + " $" + p.precio));
            break;

            case 5:
                // reduce: suma el valor total del inventario
                let inv = productos.reduce((a,p)=> a + (p.precio * p.stock),0);
                console.log(inv);
            break;

            case 6:
                // reduce: suma todas las ventas
                let v = productos.reduce((a,p)=> a + p.ventas,0);
                console.log(v);
            break;

            case 7:
                // sort: ordena por precio y por ventas
                console.log([...productos].sort((a,b)=> a.precio - b.precio));
                console.log([...productos].sort((a,b)=> b.ventas - a.ventas));
            break;

            case 8:
                // find: busca un producto por nombre
                rl.question("nombre: ", (n)=>{
                    let b = productos.find(p => p.nombre.toLowerCase() == n.toLowerCase());
                    console.log(b ? b : "no esta");
                    menu();
                });
                return;

            case 9:
                // some: revisa si hay al menos uno agotado
                console.log(productos.some(p => p.stock == 0));

                // every: revisa si todos tienen stock
                console.log(productos.every(p => p.stock > 0));
            break;

            case 10:
                // clasifica el precio
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

                // sort para sacar el primero
                console.log([...productos].sort((a,b)=> b.ventas - a.ventas)[0]);
                console.log([...productos].sort((a,b)=> b.precio - a.precio)[0]);
            break;

            case 12:
                // reporte final

                let p1 = [...productos].sort((a,b)=> a.precio - b.precio);
                let p2 = [...productos].sort((a,b)=> b.ventas - a.ventas);

                // más caro, más barato, más vendido
                console.log(p1[p1.length - 1]);
                console.log(p1[0]);
                console.log(p2[0]);

                // cálculos generales
                let i = productos.reduce((a,p)=> a + (p.precio * p.stock),0);
                let vt = productos.reduce((a,p)=> a + p.ventas,0);
                let ag = productos.filter(p=> p.stock == 0).length;

                console.log(i);
                console.log(vt);
                console.log(ag);
            break;

            case 13:
                console.log("salir");
                rl.close();
                return;

            default:
                console.log("No valido");
        }

        menu(); // vuelve a mostrar el menú (como un while)
    });
}

menu();
