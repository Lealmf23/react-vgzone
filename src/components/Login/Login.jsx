import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form, FloatingLabel, Button, Col, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useAuthContext } from '../context/autContext'

const URI = 'https://nodejs-mysql-vgzone-production.up.railway.app/login/'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuthContext()
    const navigate = useNavigate()

    const submitLogin = async (e) => {
        e.preventDefault()
        await axios
            .post(URI, { us_user: username, us_password: password })
            .then(({ data }) => {
                login()
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenid@',
                    text: 'Te has logueado correctamente',
                })
                navigate('/admin')
            })
            .catch(({ response }) => {
                console.log(response.data)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario y/o contraseña incorrecta',
                })
            })
    }

    return (
        <Container className='first-container pt-5 justify-footer'>
            <Row className='justify-content-md-center mb-5'>
                <Col md='4'>
                    <h2 className='text-center text-white pb-4'>Acceso Admin</h2>
                    <form onSubmit={submitLogin}>
                        <FloatingLabel
                            controlId='InputName'
                            label='Usuario:'
                            className='mb-3'>
                            <Form.Control
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                name='username'
                                type='text'
                                placeholder=' '
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId='InputDev'
                            label='Contraseña:'
                            className='mb-3'>
                            <Form.Control
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name='password'
                                type='password'
                                placeholder=' '
                                required
                            />
                        </FloatingLabel>

                        <Button
                            variant='success'
                            type='submit'
                            className='btn btn-primary'>
                            Login
                        </Button>
                        <Link
                            to='/'
                            className='btn btn-secondary mt-2 mb-2 mx-2'>
                            Cancelar
                        </Link>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
