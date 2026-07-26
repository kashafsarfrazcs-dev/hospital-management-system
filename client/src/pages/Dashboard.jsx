import { useEffect, useState } from "react";

import API from "../api/axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/dashboard.css";


function Dashboard(){


const [stats,setStats] = useState({

patients:0,
doctors:0,
appointments:0,
revenue:0

});



const getStats = async()=>{


try{


const patients = await API.get("/patients");

const doctors = await API.get("/doctors");

const appointments = await API.get("/appointments");

const bills = await API.get("/billing");



const totalRevenue = bills.data.reduce(

(total,bill)=> total + bill.totalAmount,

0

);



setStats({

patients:patients.data.length,

doctors:doctors.data.length,

appointments:appointments.data.length,

revenue:totalRevenue

});


}
catch(error){

console.log(error);

}


};




useEffect(()=>{

getStats();

},[]);





return(

<div>


<Sidebar/>

<Navbar/>



<div className="dashboard">


<div className="card">

<h2>
{stats.patients}
</h2>

<p>
Patients
</p>

</div>



<div className="card">

<h2>
{stats.doctors}
</h2>

<p>
Doctors
</p>

</div>



<div className="card">

<h2>
{stats.appointments}
</h2>

<p>
Appointments
</p>

</div>



<div className="card">

<h2>
${stats.revenue}
</h2>

<p>
Revenue
</p>

</div>



</div>



</div>

)

}


export default Dashboard;