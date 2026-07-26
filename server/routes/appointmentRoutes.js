const express = require("express");

const router = express.Router();


const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");


const Appointment = require("../models/Appointment");


const {
    createAppointment,
    getAppointments
} = require("../controllers/appointmentController");








// Create Appointment

router.post(
    "/",
    protect,
    authorizeRoles(
        "admin",
        "receptionist"
    ),
    createAppointment
);







// Get Appointments

router.get(
    "/",
    protect,
    authorizeRoles(
        "admin",
        "doctor",
        "receptionist"
    ),
    getAppointments
);







// Appointment Count Dashboard

router.get(
    "/count",
    protect,
    authorizeRoles("admin"),
    async(req,res)=>{


        const count = await Appointment.countDocuments();


        res.json({
            count
        });


    }
);








module.exports = router;