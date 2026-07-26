import { useEffect, useState } from "react";

import API from "../api/axios";

import "../styles/appointments.css";


function Appointments() {


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
appointmentDate:"",
status:"Pending",
notes:""

});




// Get All Appointments

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





// Handle Input Change

const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};





// Create Appointment

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
appointmentDate:"",
status:"Pending",
notes:""

});



getAppointments();



}

catch(error){

console.log(error.response?.data || error.message);

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

console.log(error.response?.data || error.message);

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

name="appointmentDate"

value={form.appointmentDate}

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


<option value="Cancelled">
Cancelled
</option>


</select>





<textarea

name="notes"

placeholder="Appointment Notes"

value={form.notes}

onChange={handleChange}

/>





<button type="submit">

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
Status
</th>


<th>
Notes
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

{
appointment.patient?.name ||
appointment.patient
}

</td>



<td>

{
appointment.doctor?.name ||
appointment.doctor
}

</td>




<td>

{
new Date(
appointment.appointmentDate
).toLocaleDateString()

}

</td>



<td>

{appointment.status}

</td>




<td>

{appointment.notes || "No notes"}

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