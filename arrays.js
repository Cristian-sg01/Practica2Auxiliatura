let nombre = ':';
console.log('Las marcas son',nombre);

let nombres = ['Nissan', 'Honda', 'Ford', 'Toyota', 'Alfa Romero'];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}
console.log('En total son',nombres.length, 'marcas');
let nombreLargo = [0];
for (let i = 0; i < nombres.length; i++) { 
        if (nombreLargo.length <= nombres[i].length) { 
            nombreLargo = nombres[i];
        }
}
console.log('Marca con mas letras es: ', nombreLargo);



