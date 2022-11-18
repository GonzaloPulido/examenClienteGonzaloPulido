"use strict"
// *** Jugador ***
function creaJugador(nombre, apellidos,nivel = 1,puntuacion = 1) {
    return {
        Nombre: nombre,
        Apellidos: apellidos,
        Nivel: nivel,
        Puntuacion: puntuacion,

        sumarPuntuacion(){
            this.puntuacion += 1
            if(this.puntuacion >= 10){
                this.nivel = parseInt(this.puntuacion/10)
            }else{
                this.nivel = 1
            }
        },

        restarPuntuacion(){
            this.puntuacion -= 1
            if(puntuacion = 0){
                this.puntuacion = 1
                this.nivel = 1
            }else{
                if(this.puntuacion >= 10){
                    this.nivel = parseInt(this.puntuacion/10)
                }else{
                    this.nivel = 1
                }
            }
            
        },

        reseteaJugador(){
            this.puntuacion = 1
            this.nivel = 1
            console.log(`El jugador ${this.name} ha sido eliminado`)
        }


    };
}

// *** Jugadores Del Sistema ***
const jugador1 = creaJugador("Gonzalo","Pulido Sánchez",30,200);
const jugador2 = creaJugador("Manuel","Rivas",100,10000000);
const listaJugadores = [jugador1,jugador2]