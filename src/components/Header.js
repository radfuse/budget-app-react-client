import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {
    const allMenuItems = [
        { label: 'Home', to: '/'},
        { label: 'Categories', to: '/categories', requiresAuth: true },
        { label: 'Transactions', to: '/transactions', requiresAuth: true },
        { label: 'Login', to: '/login', requiresGuest: true },
        { label: 'Register', to: '/register', requiresGuest: true },
        { label: 'Logout', to: '/logout', requiresAuth: true },
    ]

    const loggedIn = useSelector(state => state.auth.isAuthenticated)

    let visibleItems = [...allMenuItems].filter((item) => {            
        if(item.requiresAuth && !loggedIn)
            return false
    
        if(item.requiresGuest && loggedIn)
            return false

        return true
    })

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <Link className="navbar-brand" to="/">Brand</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        { visibleItems.map((object, i) => <li className="nav-item" key={object.label}><Link className="nav-link" to={object.to}>{object.label}</Link></li>) }
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header
