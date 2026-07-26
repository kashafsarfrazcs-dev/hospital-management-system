const Appointment = require("../models/Appointment");


// Create Appointment
const createAppointment = async(req,res)=>{
    try{

        const appointment = await Appointment.create(req.body);

        res.status(201).json({
            message:"Appointment created successfully",
            appointment
        });

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};



// Get All Appointments
const getAppointments = async(req,res)=>{
    try{

        const appointments = await Appointment
        .find()
        .populate("patient")
        .populate("doctor");


        res.json(appointments);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};



module.exports={
    createAppointment,
    getAppointments
};