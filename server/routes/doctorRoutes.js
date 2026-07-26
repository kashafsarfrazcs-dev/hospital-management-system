const express = require("express");

const router = express.Router();


const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");


const Doctor = require("../models/Doctor");



const {
    createDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor
} = require("../controllers/doctorController");







// Create Doctor

router.post(
    "/",
    protect,
    authorizeRoles("admin"),
    createDoctor
);







// Get Doctors

router.get(
    "/",
    protect,
    getDoctors
);







// Doctor Count Dashboard

router.get(
    "/count",
    protect,
    authorizeRoles("admin"),
    async(req,res)=>{


        const count = await Doctor.countDocuments();


        res.json({
            count
        });


    }
);







// Single Doctor

router.get(
    "/:id",
    protect,
    getDoctor
);







// Update Doctor

router.put(
    "/:id",
    protect,
    authorizeRoles("admin"),
    updateDoctor
);







// Delete Doctor

router.delete(
    "/:id",
    protect,
    authorizeRoles("admin"),
    deleteDoctor
);







module.exports = router;