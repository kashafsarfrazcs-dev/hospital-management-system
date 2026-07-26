import { useEffect, useState } from "react";

import API from "../api/axios";

import "../styles/appointments.css";



function Appointments(){


const user = JSON.parse(
    localStorage.getItem("user")
);


const role = user?.role;



const canManage =
role === "admin" || role === "receptionist";




const [appointments,setAppointments] = useState([]);



const [form,setForm] = useState({

patient:"",
doctor:"",
date:"",
time:"",
status:"Pending"

});





// Get Appointments

const getAppointments = async()=>{


try{


const res = await API.get("/appointments");


setAppointments(res.data);


}

catch(error){

console.log(error);

}


};






useEffect(()=>{


getAppointments();


},[]);







const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};








// Add Appointment

const addAppointment = async(e)=>{


e.preventDefault();



try{


await API.post(

"/appointments",

form

);



setForm({

patient:"",
doctor:"",
date:"",
time:"",
status:"Pending"

});



getAppointments();



}


catch(error){

console.log(error);

}


};









// Delete Appointment

const deleteAppointment = async(id)=>{


try{


await API.delete(

`/appointments/${id}`

);



getAppointments();



}

catch(error){

console.log(error);

}


};








return(



<div className="appointment-page">


<h1>
📅 Appointment Management
</h1>





<div className="appointment-container">





{

canManage &&



<form

className="appointment-form"

onSubmit={addAppointment}

>



<input

name="patient"

placeholder="Patient ID"

value={form.patient}

onChange={handleChange}

required

/>





<input

name="doctor"

placeholder="Doctor ID"

value={form.doctor}

onChange={handleChange}

required

/>







<input

type="date"

name="date"

value={form.date}

onChange={handleChange}

required

/>






<input

type="time"

name="time"

value={form.time}

onChange={handleChange}

required

/>






<select

name="status"

value={form.status}

onChange={handleChange}

>


<option value="Pending">
Pending
</option>


<option value="Confirmed">
Confirmed
</option>


<option value="Completed">
Completed
</option>



</select>





<button>

Create Appointment

</button>



</form>



}









<table>


<thead>


<tr>


<th>
Patient
</th>


<th>
Doctor
</th>


<th>
Date
</th>


<th>
Time
</th>


<th>
Status
</th>



{

canManage &&

<th>
Action
</th>

}



</tr>


</thead>






<tbody>



{

appointments.map((appointment)=>(



<tr key={appointment._id}>


<td>
{appointment.patient}
</td>


<td>
{appointment.doctor}
</td>


<td>
{appointment.date}
</td>


<td>
{appointment.time}
</td>


<td>
{appointment.status}
</td>





{

canManage &&



<td>


<button

className="delete-btn"

onClick={()=>deleteAppointment(appointment._id)}

>

Delete

</button>


</td>



}



</tr>



))


}



</tbody>



</table>





</div>


</div>



)


}



export default Appointments;