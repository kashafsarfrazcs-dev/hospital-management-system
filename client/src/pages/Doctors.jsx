import { useEffect, useState } from "react";

import API from "../api/axios";

import "../styles/doctors.css";


function Doctors(){


const [doctors,setDoctors] = useState([]);

const [loading,setLoading] = useState(false);



const [form,setForm] = useState({

name:"",
specialization:"",
phone:"",
email:"",
experience:""

});





// Fetch Doctors

const getDoctors = async()=>{

try{


const res = await API.get("/doctors");


setDoctors(res.data);


}

catch(error){


console.log(error);


alert(
error.response?.data?.message ||
"Failed to load doctors"
);


}


};





useEffect(()=>{


getDoctors();


},[]);







// Input Change

const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};









// Add Doctor

const addDoctor = async(e)=>{


e.preventDefault();



try{


setLoading(true);



await API.post(
"/doctors",
form
);



alert(
"Doctor Added Successfully"
);




setForm({

name:"",
specialization:"",
phone:"",
email:"",
experience:""

});




getDoctors();



}

catch(error){


console.log(error.response);



alert(

error.response?.data?.message ||

"Failed to add doctor"

);



}

finally{


setLoading(false);


}



};









// Delete Doctor

const deleteDoctor = async(id)=>{


const confirmDelete = window.confirm(
"Are you sure you want to delete this doctor?"
);



if(!confirmDelete)
return;



try{


await API.delete(
`/doctors/${id}`
);



alert(
"Doctor Deleted Successfully"
);



getDoctors();



}

catch(error){


console.log(error);



alert(

error.response?.data?.message ||

"Delete failed"

);


}



};








return(


<div className="doctor-page">


<h1>
👨‍⚕️ Doctors Management
</h1>





<div className="doctor-container">






<form

className="doctor-form"

onSubmit={addDoctor}

>




<input

name="name"

placeholder="Doctor Name"

value={form.name}

onChange={handleChange}

required

/>






<input

name="specialization"

placeholder="Specialization"

value={form.specialization}

onChange={handleChange}

required

/>






<input

name="phone"

placeholder="Phone"

value={form.phone}

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

name="experience"

type="number"

placeholder="Experience (Years)"

value={form.experience}

onChange={handleChange}

required

/>








<button disabled={loading}>


{

loading

?

"Adding..."

:

"Add Doctor"

}


</button>





</form>









<table>


<thead>

<tr>


<th>
Name
</th>


<th>
Specialization
</th>


<th>
Phone
</th>


<th>
Email
</th>


<th>
Experience
</th>


<th>
Action
</th>


</tr>

</thead>








<tbody>



{

doctors.length === 0 ?


<tr>

<td colSpan="6">

No Doctors Found

</td>

</tr>



:

doctors.map((doctor)=>(



<tr key={doctor._id}>


<td>
{doctor.name}
</td>



<td>
{doctor.specialization}
</td>




<td>
{doctor.phone}
</td>




<td>
{doctor.email}
</td>




<td>
{doctor.experience} Years
</td>





<td>


<button

className="delete-btn"

onClick={()=>deleteDoctor(doctor._id)}

>

Delete

</button>



</td>



</tr>



))


}




</tbody>



</table>







</div>


</div>


)


}



export default Doctors;