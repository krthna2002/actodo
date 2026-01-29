// import { useState } from "react"
import { Link } from "react-router-dom"

function Login(props) {
    console.log(props.data)

    return(
        <div className='bg-black h-screen flex flex-col justify-between'>
            <div className='bg-white p-10 m-20 rounded-md flex flex-col gap-3'>
                <h1 className="text-4xl font-bold">Hey Hi 👋</h1>
                {
                    props.check ?
                        <p>I help you manage your activities after you login :)</p> :
                        <h1 className="text-red-600 font-semibold">Please Signup Before You Login</h1>
                }
                <div>
                    <form onSubmit={(e) => props.handleSubmit(e)} className="flex flex-col gap-2 w-100px sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <input type="text"
                            value={props.state.userName}
                            name="userName"
                            placeholder="Username"
                            onChange={(e) => props.handleChange(e)}
                            className="focus:outline-green-500 
                        border-2 p-2 rounded-md  border-black
                        " required></input>

                        <input type="password"
                            value={props.state.password}
                            name="password"
                            placeholder="Password"
                            onChange={(e) => props.handleChange(e)}
                            className="focus:outline-green-500 border-2 
                        p-2 rounded-md border-black" required></input>
                        <div className="text-red-500">
                        </div>
                        <button type="submit" //onClick={handleLogin}
                            className="focus:outline-green-500 border-2 p-2 w-1/2 font-semibold rounded-md bg-violet-700 border-black text-black">
                            LOGIN</button>
                    </form>
                </div>

                <p>Don't have an account ? <Link to={"/singup"} className="underline cursor-pointer font-bold hover:text-orange-500">Sign Up</Link></p>
            </div>
            <div className="flex flex-row justify-between m-5 w-50">
                <p></p>
                <p className="bg-white text-black p-2 rounded-md text-center">Please Signup before you login :)</p>
            </div>

        </div>

    )
}
export default Login