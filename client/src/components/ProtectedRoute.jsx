import { Navigate } from "react-router-dom";


function ProtectedRoute({children, allowedRoles}){


const token = localStorage.getItem("token");


const user = JSON.parse(
    localStorage.getItem("user")
);



/*
No token means user is not logged in
*/

if(!token){

    return <Navigate to="/" />;

}



/*
Role checking
*/

if(
    allowedRoles &&
    !allowedRoles.includes(user?.role)
){

    return <Navigate to="/dashboard" />;

}




return children;


}


export default ProtectedRoute;