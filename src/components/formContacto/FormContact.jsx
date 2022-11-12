import axios from 'axios'
import { useState } from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

function FormContact() {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')

    const store = async (e) => {
        e.preventDefault()
        const URI = 'https://nodejs-mysql-vgzone-production.up.railway.app/contacto'
        await axios.post(URI, {
            c_name: name,
            c_mail: mail,
            c_subject: subject,
            c_description: description,
        })
        Swal.fire('Datos enviados correctamente!', 'Nos estaremos comunicando a la brevedad!', 'success')
    }

    return (
        <Form onSubmit={store}>
            <FloatingLabel
                controlId='floatingInput'
                label='Nombre:'
                className='mb-3 mt-5'>
                <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name='name'
                    type='text'
                    placeholder='Peter Parker'
                    required
                />
            </FloatingLabel>
            <FloatingLabel
                controlId='floatingInput2'
                label='Email:'
                className='mb-3'>
                <Form.Control
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    name='mail'
                    type='email'
                    placeholder='nombre@ejemplo.com'
                    required
                />
            </FloatingLabel>
            <FloatingLabel
                controlId='floatingSelect'
                label='Selecciona el asunto:'
                className='mb-3'>
                <Form.Select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    name='subject'
                    aria-label='Floatinglabele'
                    required>
                    <option>Selecciona una opción</option>
                    <option value='Comprar'>Comprar Juegos</option>
                    <option value='Reclamos'>Reclamos</option>
                    <option value='Otras'>Otras Consultas</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel
                controlId='floatingTextarea2'
                label='Escribinos que juegos deseas comprar o cualquier otra consulta:'
                className='mb-3'
                required>
                <Form.Control
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name='description'
                    as='textarea'
                    placeholder='Leave a comment here'
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
            <Button
                variant='primary'
                type='submit'>
                Enviar
            </Button>
        </Form>
    )
}

export default FormContact
