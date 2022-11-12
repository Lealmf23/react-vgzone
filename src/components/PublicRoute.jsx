import { Outlet } from 'react-router-dom'
import { useAuthContext } from './context/autContext'

export default function PublicRoute() {
    const { isAuthenticated } = useAuthContext()

    if (isAuthenticated) {
        return <Outlet />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}
