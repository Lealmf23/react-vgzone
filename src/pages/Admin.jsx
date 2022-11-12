import { Container } from 'react-bootstrap'

import ShowGamesAdmin from '../components/GamesAdmin/ShowGamesAdmin'

function Admin() {


    return (
        <Container className='first-container pt-3'>
            <h2 className='text-center text-white'>Gestor de Juegos</h2>
            <ShowGamesAdmin />
        </Container>
    )
}

export default Admin
