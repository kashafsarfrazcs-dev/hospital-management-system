import { useEffect, useState } from "react";

import API from "../api/axios";

import "../styles/patients.css";



function Patients(){



const user = JSON.parse(
    localStorage.getItem("user")
);


const role = user?.role;



const canManage = 
role === "admin" || role === "receptionist";




const [patients,setPatients] = useState([]);



const [form,setForm] = useState({

name:"",
age:"",
gender:"",
phone:"",
disease:""

});





// Get Patients

const getPatients = async()=>{


try{


const res = await API.get("/patients");


setPatients(res.data);


}

catch(error){

console.log(error);

}


};





useEffect(()=>{


getPatients();


},[]);







// Input Handling

const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};







// Add Patient

const addPatient = async(e)=>{


e.preventDefault();



try{


await API.post(

"/patients",

form

);



setForm({

name:"",
age:"",
gender:"",
phone:"",
disease:""

});



getPatients();


}


catch(error){

console.log(error);

}


};








// Delete Patient

const deletePatient = async(id)=>{


try{


await API.delete(

`/patients/${id}`

);



getPatients();



}

catch(error){

console.log(error);

}


};







return(



<div className="patient-page">



<h1>
🧑‍🤝‍🧑 Patients Management
</h1>





<div className="patient-container">







{/* Show Form Only Admin & Receptionist */}

{

canManage &&


<form

className="patient-form"

onSubmit={addPatient}

>



<input

name="name"

placeholder="Patient Name"

value={form.name}

onChange={handleChange}

required

/>




<input

name="age"

placeholder="Age"

value={form.age}

onChange={handleChange}

required

/>





<select

name="gender"

value={form.gender}

onChange={handleChange}

required

>


<option value="">
Select Gender
</option>


<option value="Male">
Male
</option>


<option value="Female">
Female
</option>



</select>





<input

name="phone"

placeholder="Phone"

value={form.phone}

onChange={handleChange}

/>





<input

name="disease"

placeholder="Disease"

value={form.disease}

onChange={handleChange}

/>




<button>

Add Patient

</button>



</form>


}









<table>


<thead>


<tr>


<th>Name</th>

<th>Age</th>

<th>Gender</th>

<th>Phone</th>

<th>Disease</th>


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

patients.map((patient)=>(


<tr key={patient._id}>


<td>
{patient.name}
</td>


<td>
{patient.age}
</td>


<td>
{patient.gender}
</td>


<td>
{patient.phone}
</td>


<td>
{patient.disease}
</td>





{

canManage &&


<td>


<button

className="delete-btn"

onClick={()=>deletePatient(patient._id)}

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



export default Patients;