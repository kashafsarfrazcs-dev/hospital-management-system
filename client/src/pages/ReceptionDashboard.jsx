import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/dashboard.css";


function ReceptionDashboard(){


const user = JSON.parse(
localStorage.getItem("user")
);



return(


<div>


<Sidebar/>

<Navbar/>





<div className="dashboard">



<h1>
🧑‍💼 Reception Dashboard
</h1>



<p>
Welcome {user?.name}
</p>








<div className="card">


<h2>
🧑‍🤝‍🧑
</h2>


<h3>
Patients
</h3>


<p>
Register and manage patients
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
Book appointments
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
Manage patient bills
</p>


</div>







</div>


</div>


)


}


export default ReceptionDashboard;