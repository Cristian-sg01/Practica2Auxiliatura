
let jugador ={
    nombre:'Lionel Messi',
    mundiales:1,
    genero:'Masculino',
    equipo:['Argentina','PSG'],
    activos: true,
    goles: 804,
    informacion(){
        console.log(`El jugador ${this.nombre} tiene ${this.mundiales} mundial, es un jugador activo en la actualidad tiene ${this.goles} en su carrera`);

    }

}
console.log(jugador);
console.log(jugador.mundiales);
jugador.informacion();