import Carousel from 'react-bootstrap/Carousel'
import './carrousel.css'

function Carrousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className='carrousel-slide'>
                    <img
                        className='d-block image-carrousel'
                        src='/images/banner/spiderman-banner.webp'
                        alt='Spider-Man'
                    />

                    <Carousel.Caption className='glass-effect'>
                        <div className='carrousel-content'>
                            <h3>Marvel's Spider-Man</h3>
                            <p>
                                En el espectacular Marvel's Spider-Man te esperan saltos, combos de
                                combates, carreras y acrobacias.
                            </p>
                        </div>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carrousel-slide'>
                    <img
                        className='d-block image-carrousel'
                        src='/images/banner/forza-banner.webp'
                        alt='Forza Horizon 5'
                    />
                    <Carousel.Caption className='glass-effect'>
                        <div className='carrousel-content'>
                            <h3>Forza Horizon 5</h3>
                            <p>
                                Explora tierras remotas, enfréntate a máquinas más grandes e
                                imponentes y descubre increíbles tribus en tu regreso a un futuro
                                lejano en el mundo apocalíptico de Horizon.
                            </p>
                        </div>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carrousel-slide'>
                    <img
                        className='d-block image-carrousel'
                        src='/images/banner/jedi-fallen-banner.webp'
                        alt='Second slide'
                    />

                    <Carousel.Caption className='glass-effect'>
                        <div className='carrousel-content'>
                            <h3>Star Wars Jedi: Fallen Order</h3>
                            <p>
                                Videojuego de acción y aventuras ambientado dentro del universo
                                ideado por George Lucas, concretamente entre los episodios tercero y
                                cuarto de la saga cinematográfica
                            </p>
                        </div>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carrousel
