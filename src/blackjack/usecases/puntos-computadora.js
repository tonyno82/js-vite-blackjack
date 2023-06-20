import { pedirCarta, crearCarta, acumularPuntos, determinarGanador } from "./";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {Array<Number>} puntosJugadores 
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosJugadores, divCartasJugadores, puntosHTML ) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck )
        puntosComputadora = acumularPuntos(puntosJugadores, puntosHTML, carta, puntosJugadores.length-1)
        crearCarta(carta, puntosJugadores.length-1, divCartasJugadores)
        
        if (puntosMinimos > 21){
            break
        }
        

    } while ( puntosComputadora < puntosMinimos && puntosMinimos <= 21 )

    determinarGanador( puntosJugadores )

}