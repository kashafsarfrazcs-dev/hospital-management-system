const MedicalRecord = require("../models/MedicalRecord");


// Create Medical Record
const createRecord = async(req,res)=>{

    try{

        const record = await MedicalRecord.create(req.body);

        res.status(201).json({
            message:"Medical record created successfully",
            record
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// Get All Records
const getRecords = async(req,res)=>{

    try{

        const records = await MedicalRecord
        .find()
        .populate("patient")
        .populate("doctor");


        res.json(records);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



module.exports={
    createRecord,
    getRecords
};