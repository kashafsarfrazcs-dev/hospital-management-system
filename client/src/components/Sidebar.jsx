import { Link, useNavigate } from "react-router-dom";

import "../styles/sidebar.css";


function Sidebar(){


const navigate = useNavigate();



const user = JSON.parse(
    localStorage.getItem("user")
);


const role = user?.role;




const logout = ()=>{


localStorage.removeItem("token");

localStorage.removeItem("user");


navigate("/");


};





return(


<div className="sidebar">


<h2>
🏥 MediCare
</h2>



<ul>



{
role === "admin" &&

<>


<li>
<Link to="/admin-dashboard">
Dashboard
</Link>
</li>


<li>
<Link to="/doctors">
Doctors
</Link>
</li>


<li>
<Link to="/patients">
Patients
</Link>
</li>


<li>
<Link to="/appointments">
Appointments
</Link>
</li>


<li>
<Link to="/billing">
Billing
</Link>
</li>



</>


}







{
role === "doctor" &&

<>


<li>
<Link to="/doctor-dashboard">
Dashboard
</Link>
</li>



<li>
<Link to="/appointments">
My Appointments
</Link>
</li>



</>


}








{
role === "receptionist" &&

<>


<li>
<Link to="/reception-dashboard">
Dashboard
</Link>
</li>



<li>
<Link to="/patients">
Patients
</Link>
</li>



<li>
<Link to="/appointments">
Appointments
</Link>
</li>



<li>
<Link to="/billing">
Billing
</Link>
</li>



</>


}






<li>

<button

className="logout-btn"

onClick={logout}

>

Logout

</button>


</li>



</ul>


</div>


)


}


export default Sidebar;