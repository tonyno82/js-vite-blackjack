import {valorCarta} from './'
/**
 * 
 * @param {Array<Number>} puntosJugadores 
 * @param {HTMLElement} puntosHTML 
 * @param {String} carta 
 * @param {Number} turno 
 * @returns 
 */
export const acumularPuntos = ( puntosJugadores, puntosHTML, carta, turno ) => {

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
    puntosHTML[turno].innerText = puntosJugadores[turno]
    return puntosJugadores[turno]
}