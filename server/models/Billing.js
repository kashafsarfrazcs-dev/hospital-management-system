const mongoose = require("mongoose");


const billingSchema = new mongoose.Schema(
{
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },

    consultationFee:{
        type:Number,
        required:true
    },

    medicineCharges:{
        type:Number,
        default:0
    },

    labCharges:{
        type:Number,
        default:0
    },

    totalAmount:{
        type:Number
    },

    paymentStatus:{
        type:String,
        enum:[
            "Pending",
            "Paid"
        ],
        default:"Pending"
    }

},
{
    timestamps:true
});


// Calculate total automatically
billingSchema.pre("save", function(next){

    this.totalAmount =
        this.consultationFee +
        this.medicineCharges +
        this.labCharges;

    next();

});


module.exports = mongoose.model(
    "Billing",
    billingSchema
);