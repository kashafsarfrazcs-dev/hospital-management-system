import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";

import "../styles/login.css";


function Register(){


const navigate = useNavigate();



const [form,setForm] = useState({

name:"",
email:"",
password:"",
role:"receptionist"

});




const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};






const handleRegister = async(e)=>{


e.preventDefault();



try{


const response = await API.post(

"/auth/register",

form

);



alert(
response.data.message || 
"Registration successful"
);



navigate("/");



}
catch(error){


alert(

error.response?.data?.message ||

"Registration failed"

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
Create New Account
</p>





<form onSubmit={handleRegister}>


<input

name="name"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

required

/>





<input

name="email"

type="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

required

/>





<input

name="password"

type="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

required

/>






<select

name="role"

value={form.role}

onChange={handleChange}

>


<option value="admin">
Admin
</option>


<option value="doctor">
Doctor
</option>


<option value="receptionist">
Receptionist
</option>



</select>







<button type="submit">

Register

</button>



</form>





<p>


Already have account?


<button

className="link-btn"

onClick={()=>navigate("/")}

>

Login

</button>


</p>




</div>


</div>


)


}


export default Register;