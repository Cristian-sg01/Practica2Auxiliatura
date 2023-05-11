class jugadores {
    constructor (a, b, c, d, e) { /*se coloca cuantas caracteristicas tendra en este caso 5*/
        this.nombre = a;
        this.genero = b;
        this.numero = c;
        this.activo = d;
        this.equipo = e;
    }
   
}
const Neymar = new jugadores ('Neymar', 'Masculino', 10, true, 'Brasil');
const Pele = new jugadores ('Pele', 'Masculino', 10, false, 'Brasil');
const Gavi= new jugadores ('Gavi', 'Masculino', 6, true, 'España');
const Lautaro = new jugadores ('Lautaro', 'Masculino', 2, true,'Argentina');
console.log('El jugador:', Neymar);
console.log('El jugador :', Pele);
console.log('El jugador :', Gavi);
console.log('El jugador :', Lautaro);


