import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form, FloatingLabel, Button, Col, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'

const URI = 'https://nodejs-mysql-vgzone-production.up.railway.app/catalogo/'

function CreateGameAdmin() {
    const [name, setName] = useState('')
    const [dev, setDev] = useState('')
    const [release, setRelease] = useState('')
    const [device, setDevice] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const createGame = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            gm_name: name,
            gm_dev: dev,
            gm_release: release,
            gm_device: device,
            gm_category: category,
            gm_price: price,
            gm_imageURL: 'nuevojuego.webp',
            gm_description: description,
        })
        Swal.fire('Datos guardados','Se guardaron los datos correctamente' , 'success')
        navigate('/admin')
    }

    return (
        <Container className='first-container pt-3 justify-footer'>
            <Row className='justify-content-md-center mb-5'>
                <Col md='8'>
                    <h2 className='text-center text-white pb-4'>Agregar Juegos</h2>
                    <form onSubmit={createGame}>
                        <FloatingLabel
                            controlId='InputName'
                            label='Nombre:'
                            className='mb-3'>
                            <Form.Control
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name='name'
                                type='text'
                                placeholder=' '
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId='InputDev'
                            label='Desarrollador:'
                            className='mb-3'>
                            <Form.Control
                                value={dev}
                                onChange={(e) => setDev(e.target.value)}
                                name='dev'
                                type='text'
                                placeholder=' '
                                required
                            />
                        </FloatingLabel>

                        <Row>
                            <Col>
                                <FloatingLabel
                                    controlId='SelectDevice'
                                    label='Plataforma:'
                                    className='mb-3'>
                                    <Form.Select
                                        value={device}
                                        onChange={(e) => setDevice(e.target.value)}
                                        name='device'
                                        aria-label='Floatinglabel'
                                        required>
                                        <option>Selecciona una plataforma</option>
                                        <option value='bi-pc-display'>PC</option>
                                        <option value='bi-xbox'>Xbox</option>
                                        <option value='bi-playstation'>PlayStation</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel
                                    controlId='SelectCategory'
                                    label='Categoría:'
                                    className='mb-3'>
                                    <Form.Select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        name='category'
                                        aria-label='Floatinglabel'
                                        required>
                                        <option>Selecciona una categoría</option>
                                        <option value='Acción'>Acción</option>
                                        <option value='Aventura'>Aventura</option>
                                        <option value='Simulación'>Simulación</option>
                                        <option value='Superhéroes'>Superhéroes</option>
                                        <option value='Estrategia'>Estrategia</option>
                                        <option value='Carreras'>Carreras</option>
                                        <option value='Deportes'>Deportes</option>
                                        <option value='Mundo Abierto'>Mundo Abierto</option>
                                        <option value='Otros'>Otros</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <FloatingLabel
                                    controlId='InputRelease'
                                    label='Fecha Lanzamiento:'
                                    className='mb-3'>
                                    <Form.Control
                                        value={release}
                                        onChange={(e) => setRelease(e.target.value)}
                                        name='release'
                                        type='number'
                                        min='1990'
                                        max='2030'
                                        placeholder=' '
                                        required
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel
                                    controlId='InputPrice'
                                    label='Precio:'
                                    className='mb-3'>
                                    <Form.Control
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        name='price'
                                        type='number'
                                        placeholder=' '
                                        required
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <FloatingLabel
                            controlId='InputDescription'
                            label='Descripción:'
                            className='mb-3'>
                            <Form.Control
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                name='description'
                                type='text'
                                placeholder=' '
                                required
                            />
                        </FloatingLabel>

                        <Button
                            variant='success'
                            type='submit'
                            className='btn btn-primary'>
                            Agregar
                        </Button>
                        <Link
                            to='/admin'
                            className='btn btn-secondary mt-2 mb-2 mx-2'>
                            Cancelar
                        </Link>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateGameAdmin
