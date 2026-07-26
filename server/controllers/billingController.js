const Billing = require("../models/Billing");


// Create Bill
const createBill = async (req, res) => {

    try {

        const bill = await Billing.create(req.body);

        res.status(201).json({
            message: "Bill created successfully",
            bill
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// Get All Bills
const getBills = async (req, res) => {

    try {

        const bills = await Billing
            .find()
            .populate("patient");


        res.json(bills);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// Get Single Bill
const getBill = async (req, res) => {

    try {

        const bill = await Billing
            .findById(req.params.id)
            .populate("patient");


        res.json(bill);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// Update Payment Status
const updatePaymentStatus = async (req, res) => {

    try {

        const bill = await Billing.findByIdAndUpdate(
            req.params.id,
            {
                paymentStatus: req.body.paymentStatus
            },
            {
                new:true
            }
        );


        res.json({
            message:"Payment status updated",
            bill
        });


    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



module.exports = {
    createBill,
    getBills,
    getBill,
    updatePaymentStatus
};