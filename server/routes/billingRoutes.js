const express = require("express");

const router = express.Router();


const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");


const {
    createBill,
    getBills,
    getBill,
    updatePaymentStatus
} = require("../controllers/billingController");



// Admin + Receptionist create bills
router.post(
    "/",
    protect,
    authorizeRoles("admin","receptionist"),
    createBill
);


// View bills
router.get(
    "/",
    protect,
    authorizeRoles("admin","receptionist"),
    getBills
);


// Single bill
router.get(
    "/:id",
    protect,
    authorizeRoles("admin","receptionist"),
    getBill
);


// Update payment
router.put(
    "/:id",
    protect,
    authorizeRoles("admin"),
    updatePaymentStatus
);


module.exports = router;
