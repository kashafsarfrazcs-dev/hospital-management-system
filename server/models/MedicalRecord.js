const mongoose = require("mongoose");


const medicalRecordSchema = new mongoose.Schema(
{
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },

    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true
    },

    diagnosis:{
        type:String,
        required:true
    },

    symptoms:{
        type:String,
        required:true
    },

    medicines:{
        type:String
    },

    notes:{
        type:String
    },

    visitDate:{
        type:Date,
        default:Date.now
    }

},
{
    timestamps:true
});


module.exports = mongoose.model(
    "MedicalRecord",
    medicalRecordSchema
);