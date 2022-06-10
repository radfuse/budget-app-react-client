import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import Home from './pages/Home'
import Layout from './components/Layout'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'

function App() {
    const loggedIn = useSelector(state => state.auth.isAuthenticated)

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={loggedIn ? <Home /> : <Navigate to="/login" /> } />
                    <Route path="login" element={loggedIn ? <Navigate to="/" /> : <Login />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="register" element={loggedIn ? <Navigate to="/" /> : <Register />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
