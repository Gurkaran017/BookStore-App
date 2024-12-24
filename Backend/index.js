import express from "express"; 
import mongoose from "mongoose"; 
import dotenv from "dotenv"; 
import cors from "cors"; 
// import nodemailer from "nodemailer";

import bookRoute from "./route/book.route.js"; 
import userRoute from "./route/user.route.js"; 
import { sendMail } from "./controller/nodemailer.js";


const app = express(); 
const router = express.Router();

// Middleware
app.use(cors()); 
app.use(express.json()); 

dotenv.config(); 

const PORT = process.env.PORT || 4000; 
const URI = process.env.MongoDBURI; 

// Connect to MongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// Contact Us Route
// app.post("/contact", async (req, res) => {
//     const { name, email, message } = req.body;

//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "gurkaransingh197@gmail.com", 
//             pass: "qkyttdsrjktmtqww", 
//         },
//     });

//     const mailOptions = {
//         from: email, 
//         to: "gurkaransingh197@gmail.com", 
//         subject: `New Contact Us Message from ${name}`,
//         text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ success: true, message: "Message sent successfully!" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: "Failed to send message." });
//     }
// });



// Defining Routes
app.use("/book", bookRoute); 
app.use("/user", userRoute); 
app.use("/contact" , sendMail)

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
