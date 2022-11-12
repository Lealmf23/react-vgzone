import { useEffect } from 'react'
import { useAuthContext } from '../context/autContext'

function Logout() {
    const { logout } = useAuthContext()
    useEffect(() => logout())
    return null
}

export default Logout
