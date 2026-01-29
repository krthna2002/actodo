
import './App.css';
import Landing from './components/landing';
import Login from './components/login';
import Signup from './components/signin';
import { useState } from "react"
import {Route, Routes, useNavigate } from 'react-router-dom';
import Sample from './components/sample';

function App() {

  let [state, setState] = useState(
    {
      userName: "",
      password: ""
    }
  )

  const [check, setCheck] = useState(true)

  let [data, setData] = useState(
    [
      {
        id: Date.now(),
        setUsename: "User1510",
        setPassword: "Test@123"
      }
    ]
  )


    const navigate=useNavigate()
  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target
    setState(prev =>
    (
      {
        ...prev,
        [name]: value.trim()
      }
    )
    )
    
  }
   
  function handleSubmit(e) {

    e.preventDefault()
    const isvalidate =data.some(item => 
      item.setUsename === state.userName &&
        item.setPassword === state.password)
        
        if(isvalidate)
        {
        console.log("success")

        setCheck(true)
       
navigate("/landing",{state:{passUsername:state.userName}})
 setState(
          {
            ...state,
            userName: "",
            password: ""
          }
        )
      }
      else {
        setCheck(false)
        setState(
          {
            ...state,
            userName: "",
            password: ""
          })
      }
  }

  //sign up

  let [signupstate, signupsetstate] = useState(
    {
      userName: "",
      password: "",
      cPassword: ""
    }
  )

  return (
    <>
        <Routes>
          <Route path="/" element={<Login state={state}
            check={check} handleSubmit={handleSubmit}
            handleChange={handleChange} data={data} />} ></Route>
          <Route path="/singup" element={<Signup signupstate={signupstate} signupsetstate={signupsetstate} data={data} setData={setData} />}></Route>
          <Route path="/landing" element={<Landing/>}></Route>
       <Route path='/sample'element={<Sample/>}></Route>  
        </Routes>
    </>
  )
}
//  store={store}
export default App;
