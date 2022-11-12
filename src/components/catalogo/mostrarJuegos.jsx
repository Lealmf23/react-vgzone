import { useState, useEffect } from 'react'
import axios from 'axios'
import './mostrarJuegos.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MostrarJuegos() {
    const [games, setGames] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getGames = async () => {
            const URI = 'https://nodejs-mysql-vgzone-production.up.railway.app/catalogo/'
            const res = await axios.get(URI)
            setGames(res.data)
        }
        getGames()
    }, [])

    const searcher = (e) => {
        setSearch(e.target.value)
    }
    const results = !search
        ? games
        : games.filter((dato) => dato.gm_name.toLowerCase().includes(search.toLocaleLowerCase()))



    return (
        <>
            <input
                value={search}
                onChange={searcher}
                type='text'
                placeholder='Buscar Juegos'
                className='form-control mb-5'
            />
            <Row>
                {results.map((games, id) => {
                    return (
                        <Col
                            md='6'
                            lg='4'
                            key={id}>
                            <Link
                                className='Link-card'
                                to={`/juegos/${games.gm_id}`}>
                                <div className='game-card d-flex'>
                                    <div className='image_card'>
                                        <img
                                            className='image_card_content'
                                            src={`/images/games/${games.gm_imageURL}`}
                                            alt=''
                                        />
                                    </div>
                                    <div className='game-card-box'>
                                        <div className='d-flex'>
                                            <div className='w-100 bg-text'>{games.gm_category}</div>
                                            <div className='flex-shrink-1 text-center bg-icon'>
                                                <span className={games.gm_device}></span>
                                            </div>
                                        </div>
                                        <div className='game-card-content'>
                                            <h5> {games.gm_name}</h5>
                                            <p>
                                                {games.gm_dev} | {games.gm_release}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default MostrarJuegos
