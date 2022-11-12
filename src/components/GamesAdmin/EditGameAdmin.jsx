import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Form, FloatingLabel, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const URI = 'https://nodejs-mysql-vgzone-production.up.railway.app/catalogo/'

function EditGameAdmin() {
    const [name, setName] = useState('')
    const [dev, setDev] = useState('')
    const [release, setRelease] = useState('')
    const [device, setDevice] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const update = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Estás Seguro?',
            text: "Se modificaran los datos del juego!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, actualizar!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(URI + id, {
            gm_name: name,
            gm_dev: dev,
            gm_release: release,
            gm_device: device,
            gm_category: category,
            gm_price: price,
            gm_imageURL: imageURL,
            gm_description: description,
        })
        navigate('/Admin')
                Swal.fire('Actualizado!', 'Los datos fueron actualizados', 'success')
            }
        })
        
    }

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
    }, [])

    return (
        <Container className='first-container pt-3 pb-5'>
            <Row className='justify-content-md-center mb-5'>
                <Col md='10'>
                    <h2 className='text-center text-white pb-4'>Editar información de Juegos</h2>
                    <form onSubmit={update}>
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
                                        type='text'
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
                            controlId='InputImage'
                            label='Imagen Portada:'
                            className='mb-3'>
                            <Form.Control
                                value={imageURL}
                                onChange={(e) => setImageURL(e.target.value)}
                                name='imageURL'
                                type='text'
                                placeholder=' '
                                required
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId='InputDescription'
                            label='Descripción:'
                            className='mb-3'>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                name='description'
                                placeholder=' '
                                required
                            />
                        </FloatingLabel>

                        <Button
                            type='submit'
                            className='btn btn-success'>
                            Actualizar
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

export default EditGameAdmin
