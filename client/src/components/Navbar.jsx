import { useNavigate } from "react-router-dom";

import "../styles/navbar.css";



function Navbar(){


const navigate = useNavigate();



const user = JSON.parse(
    localStorage.getItem("user")
);




const logout = ()=>{


localStorage.removeItem("token");

localStorage.removeItem("user");


navigate("/");


};




return(


<div className="navbar">


<div className="nav-title">

🏥 MediCare Hospital

</div>





<div className="nav-user">


<span>
👤 {user?.name}
</span>



<span className="role">

{user?.role}

</span>




<button onClick={logout}>

Logout

</button>



</div>


</div>


)


}



export default Navbar;