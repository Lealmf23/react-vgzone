import { Col, Container, Row } from 'react-bootstrap'
import './footer.css'

function Footer() {
    return (
        <Container
            fluid
            className='footer-component bg-var-footer glass-effect pt-1 pb-2 '>
            <Container>
                <Row className='py-1 my-4'>
                    <Col
                        md='6'
                        className='footer-logo text-white'>
                        <p>
                            <span className='bi bi-controller'></span> VideoGames ZONE © 2022
                        </p>
                    </Col>
                    <Col
                        md='6'
                        className='footer-social'>
                        <p>
                            <a
                                className='text-white text-decoration-none'
                                href='/'>
                                <span className='bi-instagram'></span>
                            </a>
                            <a
                                className='text-white text-decoration-none me-3 ms-3'
                                href='/'>
                                <span className='bi-facebook'></span>
                            </a>
                            <a
                                className='text-white text-decoration-none'
                                href='/'>
                                <span className='bi-twitter'></span>
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer
