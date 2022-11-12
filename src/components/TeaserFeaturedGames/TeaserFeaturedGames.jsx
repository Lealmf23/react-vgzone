import axios from 'axios'
import { useEffect, useState } from 'react'
import './TeaserFeaturedGames.css'

import { Link } from 'react-router-dom'

const URI = 'https://nodejs-mysql-vgzone-production.up.railway.app/catalogo/'

function TeaserFeaturedGames({ gm_id }) {
    const [name, setName] = useState('')

    const [imageURL, setImageURL] = useState('')

    const getGamesById = async () => {

        const res = await axios.get(URI + gm_id)
        setName(res.data.gm_name)

        setImageURL(res.data.gm_imageURL)
    }

    useEffect(() => {
        getGamesById()
    })
    return (
        <Link
            className='featured-card-box'
            to={`/juegos/${gm_id}`}>
            <div className='featured-card'>
                <img
                    className='featured-images'
                    src={`/images/games/${imageURL}`}
                    alt=''
                />
                <p>{name}</p>
            </div>{' '}
        </Link>
    )
}

export default TeaserFeaturedGames
