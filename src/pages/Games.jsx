import { Container } from 'react-bootstrap'
import MostrarJuegos from '../components/catalogo/mostrarJuegos.jsx'

function Games() {
    return (
        <Container className='first-container pt-4'>
            <h2 className='text-center text-white pb-2'>Catalogo de Juegos</h2>
            <MostrarJuegos />
        </Container>
    )
}

export default Games
