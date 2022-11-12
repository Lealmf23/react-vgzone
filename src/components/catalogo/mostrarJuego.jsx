import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './mostrarJuegos.css'

const URI = 'https://nodejs-mysql-vgzone-production.up.railway.app/catalogo/'

function MostrarJuego() {
    const [name, setName] = useState('')
    const [dev, setDev] = useState('')
    const [release, setRelease] = useState('')
    const [device, setDevice] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [description, setDescription] = useState('')
    const { id } = useParams()

    const getGamesById = async () => {
        const res = await axios.get(URI + id)
        setName(res.data.gm_name)
        setDev(res.data.gm_dev)
        setRelease(res.data.gm_release)
        setDevice(res.data.gm_device)
        setCategory(res.data.gm_category)
        setPrice(res.data.gm_price)
        setImageURL(res.data.gm_imageURL)
        setDescription(res.data.gm_description)
    }

    useEffect(() => {
        getGamesById()
    })

    return (
        <Container className='first-container pt-5 text-white justify-footer'>
            <Link
                to='/juegos'
                className='btn btn-secondary mb-4'>
                <span className='bi bi-box-arrow-left'></span> Volver
            </Link>
            <Row>
                <Col md='3'>
                    <img
                        className='show-game-image'
                        src={`/images/games/${imageURL}`}
                        alt=''
                    />
                </Col>
                <Col md='9'>
                    <Row>
                        <Col md='8'>
                            <h1>{name}</h1>
                            <p>{category}</p>
                            <p>
                                <span className='color-span'>Desarrollador:</span> {dev}
                            </p>
                            <p>
                                <span className='color-span'>Fecha de Lanzamiento:</span> {release}
                            </p>
                            <p>
                                <span className='color-span'>Plataforma:</span>{' '}
                                <span className={device}></span>
                            </p>
                            <p>{description}</p>
                        </Col>
                        <Col md='4'>
                            <div className='glass-effect box-price text-center'>
                                <p>PRECIO</p>
                                <h3>$ {price}</h3>
                                <div className='pt-3 pb-3'>
                                    <Link
                                        to='/contacto'
                                        className='btn btn-secondary'>
                                        <span className='bi bi-info-lg'></span> Más Información
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default MostrarJuego
