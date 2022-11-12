import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ContactAdmin from './components/GamesAdmin/ContactAdmin'
import CreateGameAdmin from './components/GamesAdmin/CreateGameAdmin'
import EditGameAdmin from './components/GamesAdmin/EditGameAdmin'
import Navbar from './components/navbar/navbar.jsx'
import Admin from './pages/Admin.jsx'
import Contacto from './pages/Contact.jsx'
import Homepage from './pages/Homepage.jsx'
import MostrarJuego from './components/catalogo/mostrarJuego.jsx'
import Footer from './components/footer/footer'
import Games from './pages/Games.jsx'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login/Login'
import AuthContextProvider from './components/context/autContext'
import PublicRoute from './components/PublicRoute'
import Logout from './components/Login/logout'



function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route element={<PublicRoute />}>
                        <Route
                            path='/'
                            element={<Homepage />}
                        />
                        <Route
                            path='/juegos'
                            element={<Games />}
                        />
                        <Route
                            path='/juegos/:id'
                            element={<MostrarJuego />}
                        />
                        <Route
                            path='/contacto'
                            element={<Contacto />}
                        />
                        <Route
                            path='/login'
                            element={<Login />}
                        />
                    </Route>
                    <Route element={<ProtectedRoute />}>
                        <Route
                            path='/admin'
                            element={<Admin />}
                        />
                        <Route
                            path='/admin/edit/:id'
                            element={<EditGameAdmin />}
                        />
                        <Route
                            path='/admin/create/'
                            element={<CreateGameAdmin />}
                        />
                        <Route
                            path='/admin/contact/'
                            element={<ContactAdmin />}
                        />
                        <Route
                            path='/logout'
                            element={<Logout />}
                        />
                    </Route>
                </Routes>

                <Footer />
            </BrowserRouter>
        </AuthContextProvider>
    )
}

export default App
