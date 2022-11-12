import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ShowGamesAdmin.css'
import Swal from 'sweetalert2'

const URI = 'https://nodejs-mysql-vgzone-production.up.railway.app/catalogo/'

function ShowGamesAdmin() {
    const [games, setGames] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getGames()
    }, [])

    const getGames = async () => {
        const res = await axios.get(URI)
        setGames(res.data)
    }

    const deleteGame = (gm_id) => {
        Swal.fire({
            title: 'Estás seguro?',
            text: 'Eliminar los datos es irreversible!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${URI}${gm_id}`)
                getGames()
                Swal.fire('Eliminados!', 'Los datos fueron eliminados', 'success')
            }
        })
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }
    const results = !search
        ? games
        : games.filter((dato) => dato.gm_name.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <Container className='justify-footer pt-3'>
            <Row className='pb-5'>
                <Col md='6'>
                    <Link
                        to='/admin/create'
                        className='btn btn-secondary mt-2 mb-2 me-2'>
                        <span className='bi bi-plus-square'></span> Agregar Juego
                    </Link>
                    <Link
                        to='/admin/contact'
                        className='btn btn-secondary me-2 mt-2 mb-2'>
                        <span className='bi bi-person-rolodex'></span> Gestionar Contactos
                    </Link>
                    <Link
                        to='/logout'
                        className='btn btn-danger mt-2 mb-2'>
                        <span className='bi bi-person-rolodex'></span> Logout
                    </Link>
                </Col>
                <Col md='6'>
                    <input
                        value={search}
                        onChange={searcher}
                        type='text'
                        placeholder='Buscar Juegos'
                        className='form-control mb-2 mt-2'
                    />
                </Col>

                <Col>
                    <div>
                        {results.map((games) => (
                            <Row
                                className='Link-card-admin'
                                key={games.gm_id}>
                                <Col md='2'>
                                    <img
                                        className='image_card_content w-100 mb-2'
                                        src={`/images/games/${games.gm_imageURL}`}
                                        alt=''
                                    />
                                </Col>
                                <Col md='8'>
                                    <p>
                                        Título: <strong>{games.gm_name}</strong>
                                        <br />
                                        Desarrollador: <strong>{games.gm_dev}</strong> <br />
                                        Fecha de Lanzamiento: <strong>{games.gm_release}</strong>
                                        <br />
                                        Plataforma: <strong>{games.gm_device}</strong> <br />
                                        Categoría: <strong>{games.gm_category}</strong>
                                        <br />
                                        Precio: <strong>{games.gm_price}</strong> <br />
                                        Descripción: <strong>{games.gm_description}</strong>{' '}
                                    </p>
                                </Col>
                                <Col
                                    md='2'
                                    className='text-center'>
                                    <Link
                                        to={`/admin/edit/${games.gm_id}`}
                                        className='btn btn-success mb-2 w-100'>
                                        <span className='bi bi-pencil-square'></span> Editar
                                    </Link>
                                    <button
                                        className='btn btn-danger mb-2 w-100'
                                        onClick={() => deleteGame(games.gm_id)}>
                                        <span className='bi bi-trash3'></span> Eliminar
                                    </button>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ShowGamesAdmin
