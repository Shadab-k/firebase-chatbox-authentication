import React, { useState } from 'react'
import styles from './SignUp.module.css'
import InputControl from '../InputControl/InputControl'
import { Link ,useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'


const SignUp = () => {
    const navigate= useNavigate()
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: ""
    })

    const [errorMsg, setErrorMsg] = useState("")
    const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false)
    const handleSubmit = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Please Fill all the Credentials properly ")
            return;
        } setErrorMsg("")
        setsubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth, values.email, values.pass).then(async(res) => {
            setsubmitButtonDisabled(false)
            const user = res.user
           await updateProfile(user, {
            displayName: values.name,})
            navigate("/")
      
        }).catch((err) => {
            setsubmitButtonDisabled(false)
            setErrorMsg(err.message)


        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>SignUp</h1>
                <InputControl label="Name" placeholder=" Enter your Name ..." onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />

                <InputControl label="Email" placeholder=" Enter your email address ..." onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
                <InputControl label="Password" placeholder=" Enter Password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />

                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={handleSubmit} disabled={submitButtonDisabled}>Sign up</button>
                    <p>Already have an account?{" "}
                        <span>
                            <Link to="/login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
