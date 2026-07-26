import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/dashboard.css";


function DoctorDashboard(){


const user = JSON.parse(
    localStorage.getItem("user")
);



return(


<div>


<Sidebar/>

<Navbar/>




<div className="dashboard">



<h1>
👨‍⚕️ Doctor Dashboard
</h1>


<p>
Welcome Dr. {user?.name}
</p>





<div className="card">


<h2>
📅
</h2>


<h3>
My Appointments
</h3>


<p>
View today's patient appointments
</p>



</div>







<div className="card">


<h2>
🧑‍🤝‍🧑
</h2>


<h3>
My Patients
</h3>


<p>
View patient history
</p>



</div>







<div className="card">


<h2>
💊
</h2>


<h3>
Prescriptions
</h3>


<p>
Add medical notes and prescriptions
</p>



</div>








<div className="card">


<h2>
🩺
</h2>


<h3>
Patient Reports
</h3>


<p>
Check diagnosis records
</p>



</div>







</div>



</div>


)


}



export default DoctorDashboard;