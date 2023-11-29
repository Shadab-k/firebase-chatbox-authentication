
import './App.css';
// import Form from './componenets/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componenets/Home/Home';
import LogIn from './componenets/LogIn/LogIn';
import SignUp from './componenets/SignUp/SignUp';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Navbar from './componenets/Navbar/Navbar';




function App() {

const[userName,setUserName] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName)
      }
      else{
        setUserName("")
      }
    })
  }, [])
  return (
    <>
      <div>
        <Router>
          <Navbar/>
          {/* <LogIn/> */}
          <Routes>
            {/* <Route path='/navbar' element={<Navbar/>}/> */}
            <Route path='/' element={<Home name={userName}/>} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </Router>

        {/* <Form /> */}
      </div>


    </>
  );
}

export default App;
