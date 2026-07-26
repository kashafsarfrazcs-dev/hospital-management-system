import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";

import "../styles/login.css";


function Login(){

    const navigate = useNavigate();


    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");



    const handleLogin = async(e)=>{

        e.preventDefault();


        try{


            const response = await API.post(
                "/auth/login",
                {
                    email,
                    password
                }
            );



            // Save JWT Token

            localStorage.setItem(
                "token",
                response.data.token
            );



// Save Complete User Information
localStorage.setItem(
    "user",
    JSON.stringify({

        id: response.data.user._id,

        name: response.data.user.name,

        email: response.data.user.email,

        role: response.data.user.role

    })
);



            // Role Based Redirect

            const role = response.data.user.role;



            if(role === "admin"){

                navigate("/admin-dashboard");

            }

            else if(role === "doctor"){

                navigate("/doctor-dashboard");

            }

            else if(role === "receptionist"){

                navigate("/reception-dashboard");

            }

            else{

                navigate("/dashboard");

            }



        }
        catch(error){


            alert(

                error.response?.data?.message ||

                "Login failed"

            );


        }


    };




    return(


        <div className="login-container">


            <div className="login-card">


                <h1>
                    🏥 MediCare
                </h1>


                <p>
                    Hospital Management System
                </p>




                <form onSubmit={handleLogin}>


                    <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                    required

                    />



                    <input

                    type="password"

                    placeholder="Enter Password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                    required

                    />



                    <button type="submit">

                        Login

                    </button>



                </form>





                <p className="register-text">


                    Don't have an account?


                    <button

                    className="link-btn"

                    onClick={()=>navigate("/register")}

                    >

                        Register

                    </button>


                </p>



            </div>


        </div>


    )


}


export default Login;