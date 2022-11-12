import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-dark glass-effect'>
            <div className='container'>
                <Link
                    className='navbar-brand'
                    to='/'>
                    <span className='bi bi-controller'></span> VideoGames ZONE
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div
                    className='collapse navbar-collapse'
                    id='navbarNav'>
                    <div className='mx-auto'></div>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link
                                className='nav-link '
                                to='/'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                className='nav-link'
                                to='/juegos'>
                                Catalogo
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                className='nav-link'
                                to='/contacto'>
                                Contacto
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                className='nav-link '
                                to='/admin'>
                                Admin
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
