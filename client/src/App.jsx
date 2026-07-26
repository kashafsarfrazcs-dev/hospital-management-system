import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";


import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import ReceptionDashboard from "./pages/ReceptionDashboard";


import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Billing from "./pages/Billing";


import ProtectedRoute from "./components/ProtectedRoute";



function App(){


return(

<BrowserRouter>


<Routes>



{/* Public Routes */}


<Route

path="/"

element={<Login />}

/>


<Route

path="/register"

element={<Register />}

/>






{/* Admin Dashboard */}


<Route

path="/admin-dashboard"

element={

<ProtectedRoute allowedRoles={["admin"]}>

<AdminDashboard />

</ProtectedRoute>

}

/>






{/* Doctor Dashboard */}


<Route

path="/doctor-dashboard"

element={

<ProtectedRoute allowedRoles={["doctor"]}>

<DoctorDashboard />

</ProtectedRoute>

}

/>







{/* Reception Dashboard */}


<Route

path="/reception-dashboard"

element={

<ProtectedRoute allowedRoles={["receptionist"]}>

<ReceptionDashboard />

</ProtectedRoute>

}

/>







{/* Doctors Management */}

<Route

path="/doctors"

element={

<ProtectedRoute allowedRoles={["admin"]}>

<Doctors />

</ProtectedRoute>

}

/>






{/* Patients Management */}

<Route

path="/patients"

element={

<ProtectedRoute allowedRoles={["admin","receptionist","doctor"]}>

<Patients />

</ProtectedRoute>

}

/>







{/* Appointments Management */}

<Route

path="/appointments"

element={

<ProtectedRoute allowedRoles={["admin","receptionist","doctor"]}>

<Appointments />

</ProtectedRoute>

}

/>







{/* Billing Management */}

<Route

path="/billing"

element={

<ProtectedRoute allowedRoles={["admin","receptionist"]}>

<Billing />

</ProtectedRoute>

}

/>






</Routes>


</BrowserRouter>


)


}


export default App;