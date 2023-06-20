
const miModulo = (() => {
    'use strict'



    let deck = []
    const   tipos = ['C', 'D', 'H', 'S'], 
            especiales = ['A', 'J', 'Q', 'K']

    let puntosJugadores = []

    // Referencias 
    const   btnPedir = document.querySelector('#btnPedir'),
            btnDetener = document.querySelector('#btnDetener'),
            btnNuevo = document.querySelector('#btnNuevo');

    const   divCartasJugadores = document.querySelectorAll('.divCartas'),
            puntosHTML = document.querySelectorAll('small');


    // Esta funcion inicializar el juego
    const inicializarJuego = ( numJugadores = 2 ) => {
        console.clear()

        deck = crearDeck();
        puntosJugadores = []
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0)
        }
        puntosHTML.forEach(elem => elem.innerText = 0)
        divCartasJugadores.forEach(elem => elem.innerHTML = '')
        btnPedir.disabled = false
        btnDetener.disabled = false
    }
    // Crea un nuevo deck
    const crearDeck = () => {

        deck = [];
        for (let i = 2; i<=10; i++){
            for (let tipo of tipos){
                deck.push(i + tipo)

            }
        }
        for (let tipo of tipos){
            for (let esp of especiales) {
                deck.push(esp + tipo)
            }
        }

        return _.shuffle(deck)
    }


    const pedirCarta = () => {

        if (deck.length === 0){
            throw 'No hay cargas en el Deck'
        }
        return deck.pop()

    }

    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length-1)
        return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1 ;
    }
    
    const acumularPuntos = ( carta, turno ) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
        puntosHTML[turno].innerText = puntosJugadores[turno]
        return puntosJugadores[turno]
    }

    const crearCarta = ( carta, turno ) => {

        const imgCarta = document.createElement('img')
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta')
        divCartasJugadores[turno].append(imgCarta)
    }

    const determinarGanador = () => {
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

    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta()
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1)
            crearCarta(carta, puntosJugadores.length-1)
            
            
            // <!-- <img class='carta' src="assets/cartas/10C.png" alt=""> -->
            // const imgCarta = document.createElement('img')
            // imgCarta.src = `assets/cartas/${carta}.png`
            // imgCarta.classList.add('carta')
            // divCartasComputador.append(imgCarta)

            if (puntosMinimos > 21){
                break
            }
            

        } while ( puntosComputadora < puntosMinimos && puntosMinimos <= 21 )

        determinarGanador()

    }



    // Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta()
        const puntosJugador = acumularPuntos(carta, 0)
        crearCarta(carta, 0)

        if (puntosJugador > 21) {
            console.warn('Lo siento mucho pero perdiste')
            btnPedir.disabled = true
            btnDetener.disabled = true
            turnoComputadora( puntosJugador )
        } else if (puntosJugador === 21){
            console.warn('21, genial !!!')
            btnPedir.disabled = true
            btnDetener.disabled = true
            turnoComputadora( puntosJugador )
        }

    })
    btnDetener.addEventListener('click', () => {
        
            btnPedir.disabled = true
            btnDetener.disabled = true
            turnoComputadora( puntosJugadores[0] )
            
    })


    btnNuevo.addEventListener('click', () => {
        inicializarJuego()
        btnPedir.disabled = false
        btnDetener.disabled = false

    })

    return {
        nuevoJuego: inicializarJuego
    };

})()
