
/**
 * 
 * @param {Array<Number>} puntosJugadores 
 */
export const determinarGanador = ( puntosJugadores ) => {
    const [ puntosMinimos, puntosComputadora] = puntosJugadores

    setTimeout(() => {
        // alert(ganador(puntosJugador))
        if ( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana ;(');

        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador Gana')
        } else {
            alert('Computadora gana')
        }
    }, 10);

}