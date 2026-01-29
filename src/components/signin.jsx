import { Link, useNavigate } from "react-router-dom"
function Signup(props) {

    const signupstate = props.signupstate
    const signupsetstate = props.signupsetstate
  
    const data = props.data
    const setData = props.setData
console.log(data+"data set")

    const usernameCheck = /^[A-Z][a-z0-9]{2,10}[0-9]$/
    const passwordcheck = /^(?=.*[@_-])[A-Z][A-Za-z0-9@_-]{2,10}[a-z0-9]$/


    const handleChange = (e) => {
        const { name, value } = e.target
        signupsetstate(prev =>
        (
            {
                ...prev,
                [name]: value
            }

        )
        )
    }

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        if (usernameCheck.test(signupstate.userName) &&
            passwordcheck.test(signupstate.password)
            && signupstate.password === signupstate.cPassword)
             {
            console.log("successfully SIGN UP")
         setData(prev => (
                [
                    ...prev,
                    {
                        id:Date.now(),
                        setUsename: signupstate.userName,
                        setPassword: signupstate.password
                    }
                ]
            ))
            console.log(signupstate.password+"signupstate")
            signupsetstate(prev=>(
                {
                    ...prev,
                    userName: "",
                    password: "",
                    cPassword: ""
                }
            )
            )
         navigate("/")  
        }
        console.log(data+"setdata")
    }

    return (
        <div className='bg-black  h-screen flex flex-col justify-between'>
            <div className='bg-white p-10 m-20 rounded-md flex flex-col gap-3'>
                <h1 className="text-4xl font-bold">Hey Hi 👋</h1>
                <p>You can Signup here :)</p>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-100px sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <input type="text"
                        value={signupstate.userName}
                            name="userName" onChange={handleChange}
                            placeholder="Username"
                             className="focus:outline-green-500 border-2 
                             p-2 rounded-md  border-black" required></input>
                        <input type="password"
                        value={signupstate.password}
                            name="password" onChange={handleChange}
                            placeholder="Password" 
                            className="focus:outline-green-500 border-2
                             p-2 rounded-md border-black" required></input>
                        <input type="password"
                         value={signupstate.cPassword}
                            name="cPassword" onChange={handleChange}
                            placeholder="Confirm Password" 
                            className="focus:outline-green-500 border-2 
                            p-2 rounded-md border-black" required></input>
                        <button type="submit" className="border-2 p-2 w-1/2 font-semibold rounded-md bg-orange-500 border-black text-black">Sign Up</button>
                    </form>
                </div>
                <p>Already have an account? <Link to={"/"} className="cursor-pointer font-bold hover:text-violet-700 underline">Login</Link></p>
            </div>

            <div className="flex flex-row justify-between m-5 w-50">
                <p></p>
                <p className="bg-white text-black p-3 rounded-md text-center">
                    You can login now :)</p>
            </div>
        </div>
    )
}
export default Signup