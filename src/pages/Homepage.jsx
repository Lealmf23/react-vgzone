import { Row, Col } from 'react-bootstrap'
import Carrousel from '../components/carrousel/carrousel'
import TeaserFeaturedGames from '../components/TeaserFeaturedGames/TeaserFeaturedGames'
import TeaserLastedReleases from '../components/TeaserLastedReleases/TeaserLastedReleases'

function Homepage() {
    return (
        <div className='container-full first-container'>
            <Carrousel />
            <div className='container text-white pt-5  mb-2'>
                <h2>Juego Destacados</h2>
                <Row>
                    <Col
                        xs='6'
                        md='4'
                        lg='2'>
                        <TeaserFeaturedGames gm_id={'2'} />
                    </Col>
                    <Col
                        xs='6'
                        md='4'
                        lg='2'>
                        <TeaserFeaturedGames gm_id={'7'} />
                    </Col>
                    <Col
                        xs='6'
                        md='4'
                        lg='2'>
                        <TeaserFeaturedGames gm_id={'12'} />
                    </Col>
                    <Col
                        xs='6'
                        md='4'
                        lg='2'>
                        <TeaserFeaturedGames gm_id={'11'} />
                    </Col>
                    <Col
                        xs='6'
                        md='4'
                        lg='2'>
                        <TeaserFeaturedGames gm_id={'10'} />
                    </Col>
                    <Col
                        xs='6'
                        md='4'
                        lg='2'>
                        <TeaserFeaturedGames gm_id={'15'} />
                    </Col>
                </Row>
            </div>
            <div className='container text-white pt-5  mb-5'>
                <h2>Últimos Lanzamientos</h2>
                <Row>
                    <Col
                        md='4'
                        className='mb-3'>
                        <TeaserLastedReleases
                            gm_id={'12'}
                            imageURL2={'horizonforbidden.webp'}
                        />
                    </Col>
                    <Col
                        md='4'
                        className='mb-3'>
                        <TeaserLastedReleases
                            gm_id={'41'}
                            imageURL2={'milesmorales.webp'}
                        />
                    </Col>
                    <Col
                        md='4'
                        className='mb-3'>
                        <TeaserLastedReleases
                            gm_id={'10'}
                            imageURL2={'horizon5.webp'}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Homepage
