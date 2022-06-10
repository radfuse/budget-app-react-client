import { useState } from "react"
import { register } from "../actions/auth"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const errors = useSelector(state => state.auth.authError)

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(register(email, password, passwordAgain)).then(() => {
            navigate("/")
            window.location.reload()
        }).catch(() => {})
    }

    return (
        <form className="form-signin" onSubmit={onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Register</h1>
            { errors.error && 
                <p className="alert alert-danger">{ errors.error }</p>
            }

            <div className="form-group">
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input
                    type="email"
                    id="inputEmail"
                    value={email}
                    className={`form-control ${errors.fieldErrors?.email ? "is-invalid" : ""}`}
                    placeholder="Email address"
                    required="" autoFocus=""
                    onChange={(e) => setEmail(e.target.value)}
                />
		
                { errors.fieldErrors?.email && 
                    <div className="invalid-feedback">
                        { errors.fieldErrors.email }
                    </div>
                }
            </div>

            <div className="form-group">
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input
                    type="password"
                    id="inputPassword"
                    value={password}
                    className={`form-control ${errors.fieldErrors?.password ? "is-invalid" : ""}`}
                    placeholder="Password"
                    required=""
                    onChange={(e) => setPassword(e.target.value)}
                />
		
                { errors.fieldErrors?.password && 
                    <div className="invalid-feedback">
                        { errors.fieldErrors.password }
                    </div>
                }
            </div>

            <div className="form-group">
                <label htmlFor="inputPasswordAgain" className="sr-only">Password</label>
                <input
                    type="password"
                    id="inputPasswordAgain"
                    value={passwordAgain}
                    className={`form-control ${errors.fieldErrors?.password_again ? "is-invalid" : ""}`}
                    placeholder="Password again"
                    required=""
                    onChange={(e) => setPasswordAgain(e.target.value)}
                />
		
                { errors.fieldErrors?.password_again && 
                    <div className="invalid-feedback">
                        { errors.fieldErrors.password_again }
                    </div>
                }
            </div>

            <button className="btn btn-primary btn-block" type="submit">Register</button>
        </form>
    )
};

export default Register