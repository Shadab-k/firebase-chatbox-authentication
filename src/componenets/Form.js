import React, { useState } from 'react'
import "./Form.css";

const Form = () => {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    })
    let name, value;
    const postUser = (e) => {
        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })

    }
    //connecting Firebase

    const submitData = async (event) => {
        event.preventDefault();

        const { fname, lname, email, password } = user
        if (fname && lname && email && password) {

            const res = fetch('https://chat-box-fd37b-default-rtdb.firebaseio.com/userData.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fname, lname, email, password
                    }),

                },
            )

            if (res) {
                setUser({
                    fname: "",
                    lname: "",
                    email: "",
                    password: ""
                })
                alert("Data Stored Successfully")
            }
            else {
                alert("Please Fill the Credentials Properly ")
            }

        }
        else {
            alert("Please Fill the Credentials Properly ")
        }
    }




    return (
        <div>
            <div className="form">
                <form>
                    <label for="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" placeholder='first name' onChange={postUser} value={user.fname} />
                    <br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" placeholder='last name' onChange={postUser} value={user.lname} />
                    <br />
                    <label for="email" >Email Address:</label>
                    <br />
                    <input type="email" id="email" name="email" placeholder='email' onChange={postUser} value={user.email} />
                    <br />
                    <label for="Password">Password:</label>
                    <br />
                    <input type="password" id="password" name="password" placeholder='password' onChange={postUser} value={user.password} />
                    <br /><br />

                    <input className='button' type="submit" value="Submit" onClick={submitData} />
                </form>
            </div>
        </div>
    )
}

export default Form
