const express = require("express");

const router = express.Router();


const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");


const {
    createRecord,
    getRecords
}=require("../controllers/medicalRecordController");



// Doctor/Admin can add records
router.post(
    "/",
    protect,
    authorizeRoles("admin","doctor"),
    createRecord
);


// View records
router.get(
    "/",
    protect,
    authorizeRoles("admin","doctor"),
    getRecords
);



module.exports = router;