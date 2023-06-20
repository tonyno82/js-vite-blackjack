
/**
 * Devuelve el valor numero de una carta
 * @param {String} carta Ejemplo : '3W'
 * @returns {Number} Ejemplo : 3
 */
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length-1)
    return (isNaN(valor)) ? 
    (valor === 'A') ? 11 : 10 
    : valor * 1 ;
}