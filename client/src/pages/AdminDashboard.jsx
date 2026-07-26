import { useEffect, useState } from "react";

import API from "../api/axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/dashboard.css";


function AdminDashboard(){


const user = JSON.parse(
    localStorage.getItem("user")
);



const [stats,setStats] = useState({

patients:0,
doctors:0,
appointments:0

});





useEffect(()=>{


const getStats = async()=>{


try{


const patients = await API.get("/patients/count");

const doctors = await API.get("/doctors/count");

const appointments = await API.get("/appointments/count");



setStats({

patients:patients.data.count,

doctors:doctors.data.count,

appointments:appointments.data.count

});


}

catch(error){

console.log(error);

}


};



getStats();


},[]);







return(

<div>


<Sidebar/>

<Navbar/>




<div className="dashboard">


<h1>
👨‍💼 Admin Dashboard
</h1>



<p>
Welcome {user?.name}
</p>





<div className="card">


<h2>
👨‍⚕️
</h2>

<h3>
Doctors
</h3>

<p>
{stats.doctors} Total Doctors
</p>


</div>






<div className="card">


<h2>
🧑‍🤝‍🧑
</h2>


<h3>
Patients
</h3>


<p>
{stats.patients} Total Patients
</p>


</div>







<div className="card">


<h2>
📅
</h2>


<h3>
Appointments
</h3>


<p>
{stats.appointments} Total Appointments
</p>


</div>






<div className="card">


<h2>
💳
</h2>


<h3>
Billing
</h3>


<p>
Manage payments
</p>


</div>





</div>


</div>


)


}


export default AdminDashboard;