import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from "../actions/auth";

const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(logout())
        navigate("/login")
    })

    return null;
};

export default Logout