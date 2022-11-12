import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Swal from 'sweetalert2'

const URI = 'https://nodejs-mysql-vgzone-production.up.railway.app/contacto/'

function ContactAdmin() {
    const [contact, setContact] = useState([])

    useEffect(() => {
        getContact()
    }, [])

    const getContact = async () => {
        const res = await axios.get(URI)
        setContact(res.data)
    }

    const deleteContact = (c_id) => {
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
                axios.delete(`${URI}${c_id}`)

                Swal.fire('Eliminados!', 'Los datos fueron eliminados', 'success')
                getContact()
            }
        })
    }

    return (
        <Container className='first-container  pt-5 justify-footer'>
            <h2 className='text-center text-white'>Gestor de Contactos</h2>
            <Link
                to='/Admin'
                className='btn btn-secondary mt-2 mb-2'>
                <i className='bi bi-controller'></i> Gestionar Juegos
            </Link>
            <div>
                {contact.map((contact) => (
                    <div
                        className='Link-card-admin'
                        key={contact.c_id}>
                        <Row>
                            <Col md='10'>
                                <p>
                                    Asunto: <strong>{contact.c_subject}</strong> <br />
                                    Nombre: <strong>{contact.c_name}</strong> <br />
                                    Mail de contacto: <strong>{contact.c_mail}</strong> <br />
                                    Detalle: <strong>{contact.c_description}</strong>{' '}
                                </p>
                            </Col>
                            <Col md='2'>
                                <a
                                    className='btn btn-success w-100 mb-1'
                                    href={`mailto:${contact.c_mail}`}>
                                    Responder
                                </a>
                                <button
                                    onClick={() => deleteContact(contact.c_id)}
                                    className='btn btn-danger w-100'>
                                    <span className='bi bi-trash3'></span> Eliminar
                                </button>
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default ContactAdmin
