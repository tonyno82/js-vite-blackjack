

/**
 * Devuelve carta
 * @param {Array<String>} deck Ejemplo ['2H', '3W']
 * @returns {String} Retorna un string con la carta ejemplo : 3W
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0){
        throw new Error('No hay cargas en el Deck')
    }
    return deck.pop()

}
