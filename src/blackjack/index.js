// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';
// import crearDeckoLoQueSea from './usecases/crear-deck'; // con exporte default
// import crearDeckoLoQueSea, { funcionIndepedienbte } from './usecases/crear-deck'; // con exporte default y un export aparte
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, acumularPuntos, crearCarta } from "./usecases";

const   tipos = ['C', 'D', 'H', 'S'], 
        especiales = ['A', 'J', 'Q', 'K']

let puntosJugadores = [0,0]

// Referencias 
const   btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

const   divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

let deck = crearDeck(tipos,especiales)

// Esta funcion inicializar el juego
const inicializarJuego = ( numJugadores = 2 ) => {
    console.clear()

    deck = crearDeck(tipos,especiales);
    puntosJugadores = []
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0)
    }
    puntosHTML.forEach(elem => elem.innerText = 0)
    divCartasJugadores.forEach(elem => elem.innerHTML = '')
    btnPedir.disabled = false
    btnDetener.disabled = false
}


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck )
    const puntosJugador = acumularPuntos(puntosJugadores, puntosHTML, carta, 0)
    crearCarta(carta, 0, divCartasJugadores)

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho pero perdiste')
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora( puntosJugador, deck, puntosJugadores, divCartasJugadores, puntosHTML )
    } else if (puntosJugador === 21){
        console.warn('21, genial !!!')
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora( puntosJugador, deck, puntosJugadores, divCartasJugadores, puntosHTML )
    }

})
btnDetener.addEventListener('click', () => {
    
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora( puntosJugadores[0], deck, puntosJugadores, divCartasJugadores, puntosHTML )
        
})


btnNuevo.addEventListener('click', () => {
    inicializarJuego()
    btnPedir.disabled = false
    btnDetener.disabled = false

})