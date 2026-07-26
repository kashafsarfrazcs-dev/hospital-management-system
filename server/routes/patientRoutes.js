const express = require("express");

const router = express.Router();


const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");


const Patient = require("../models/Patient");


const {
    createPatient,
    getPatients,
    getPatient,
    updatePatient,
    deletePatient
} = require("../controllers/patientController");




// Create Patient
// Admin + Receptionist

router.post(
    "/",
    protect,
    authorizeRoles("admin","receptionist"),
    createPatient
);





// Get all patients

router.get(
    "/",
    protect,
    authorizeRoles(
        "admin",
        "doctor",
        "receptionist"
    ),
    getPatients
);






// Patient Count (Dashboard)

router.get(
    "/count",
    protect,
    authorizeRoles("admin"),
    async(req,res)=>{

        const count = await Patient.countDocuments();

        res.json({
            count
        });

    }
);







// Single Patient

router.get(
    "/:id",
    protect,
    authorizeRoles(
        "admin",
        "doctor",
        "receptionist"
    ),
    getPatient
);






// Update Patient

router.put(
    "/:id",
    protect,
    authorizeRoles(
        "admin",
        "receptionist"
    ),
    updatePatient
);







// Delete Patient

router.delete(
    "/:id",
    protect,
    authorizeRoles("admin"),
    deletePatient
);





module.exports = router;