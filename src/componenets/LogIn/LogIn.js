import React, {useState} from 'react'
import styles from './LogIn.module.css'
import InputControl from '../InputControl/InputControl'
import { Link,useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'


const LogIn = () => {


    const navigate= useNavigate()
    const [values, setValues] = useState({
      
        email: "",
        pass: "",
    })

    const [errorMsg, setErrorMsg] = useState("")
    const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false)
    const handleSubmit = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Please Fill all the Credentials properly ")
            return;
        } setErrorMsg("")
        setsubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth, values.email, values.pass).then((res) => {
            setsubmitButtonDisabled(false)   
            navigate("/")
      
        }).catch((err) => {
            setsubmitButtonDisabled(false)
            setErrorMsg(err.message)


        })
    }

    
    return (

        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>LogIn</h1>
                <InputControl label="Email" placeholder=" Enter your email address ..." onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
                <InputControl label="Password" placeholder=" Enter Password"  onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />

                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button disabled={submitButtonDisabled} onClick={handleSubmit}>Login</button>
                    <p>Already have an account?{" "}
                        <span>
                            <Link to="/signup">Sign Up</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LogIn
