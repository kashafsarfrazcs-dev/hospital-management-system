import { useEffect, useState } from "react";

import API from "../api/axios";

import "../styles/billing.css";


function Billing(){


const [bills,setBills]=useState([]);


const [form,setForm]=useState({

patient:"",
consultationFee:"",
medicineCharges:"",
labCharges:""

});



const getBills=async()=>{

try{

const res=await API.get("/billing");

setBills(res.data);

}
catch(error){

console.log(error);

}

};



useEffect(()=>{

getBills();

},[]);




const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};





const createBill=async(e)=>{

e.preventDefault();


try{


await API.post(
"/billing",
form
);


setForm({

patient:"",
consultationFee:"",
medicineCharges:"",
labCharges:""

});


getBills();


}
catch(error){

console.log(error);

}


};





return(

<div className="billing-page">


<h1>
💰 Billing Management
</h1>



<div className="billing-container">


<form 
className="billing-form"
onSubmit={createBill}
>


<input

name="patient"

placeholder="Patient ID"

value={form.patient}

onChange={handleChange}

/>


<input

name="consultationFee"

placeholder="Consultation Fee"

value={form.consultationFee}

onChange={handleChange}

/>



<input

name="medicineCharges"

placeholder="Medicine Charges"

value={form.medicineCharges}

onChange={handleChange}

/>



<input

name="labCharges"

placeholder="Lab Charges"

value={form.labCharges}

onChange={handleChange}

/>



<button>
Create Bill
</button>


</form>




<table>


<thead>

<tr>

<th>Patient</th>
<th>Total Amount</th>
<th>Status</th>

</tr>

</thead>


<tbody>


{

bills.map((bill)=>(

<tr key={bill._id}>

<td>
{bill.patient?.name || bill.patient}
</td>


<td>
${bill.totalAmount}
</td>


<td>
{bill.paymentStatus}
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


export default Billing;