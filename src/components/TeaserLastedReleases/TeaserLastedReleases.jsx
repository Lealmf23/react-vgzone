import axios from 'axios'
import { useEffect, useState } from 'react'
import './TeaserLastedReleases.css'
import { Link } from 'react-router-dom'

const URI = 'https://nodejs-mysql-vgzone-production.up.railway.app/catalogo/'

function TeaserLastedReleases({ gm_id, imageURL2 }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const getGamesById = async () => {
        const res = await axios.get(URI + gm_id)
        setName(res.data.gm_name)
        setDescription(res.data.gm_description)
    }

    useEffect(() => {
        getGamesById()
    })
    return (
        <Link
            className='releases-card-box'
            to={`/juegos/${gm_id}`}>
            <div className='releases-card'>
                <img
                    className='releases-images'
                    src={`/images/lastedRelease/${imageURL2}`}
                    alt=''
                />
                <h5>{name}</h5>
                <div className='line-clamp mb-2'>
                    <p>{description}</p>
                </div>
                <div className='text-end'>
                    <span class='bi bi-box-arrow-in-right'></span>
                </div>
            </div>{' '}
        </Link>
    )
}

export default TeaserLastedReleases
