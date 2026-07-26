const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const medicalRecordRoutes = require("./routes/medicalRecordRoutes");
const billingRoutes = require("./routes/billingRoutes");


dotenv.config();

connectDB();


const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/records", medicalRecordRoutes);
app.use("/api/billing", billingRoutes);


// Test Route
app.get("/", (req, res) => {
    res.send("🏥 Hospital Management API is Running...");
});


// Server
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});