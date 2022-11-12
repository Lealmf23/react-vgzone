import { Container, Row, Col } from 'react-bootstrap'
import FormContact from '../components/formContacto/FormContact'

function Contacto() {
    return (
        <Container className='first-container pt-5 justify-footer'>
            <Row className='justify-content-md-center'>
                <Col md='8'>
                    <h2 className='text-center text-white'>Contactanos</h2>
                    <h5 className='text-white'>
                        Si querés saber sobre disponibilidad de juegos, comprar o hacer cualquier
                        otra consulta, escribinos y a la brevedad posible nos estaremos comunicando
                        por mail.
                    </h5>
                    <FormContact />
                </Col>
            </Row>
        </Container>
    )
}

export default Contacto
