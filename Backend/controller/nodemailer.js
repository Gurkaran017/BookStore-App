import nodemailer from "nodemailer";


export const sendMail = async (req,res) =>{
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "gurkaransingh197@gmail.com", 
            pass: "qkyttdsrjktmtqww", 
        },
    });

    const mailOptions = {
        from: email, 
        to: "gurkaransingh197@gmail.com", 
        subject: `New Contact Us Message from ${name}`,
        text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        attachments: [
            {
              filename: "Banner.png",          
              path: "./photo/Banner.png", 
            },
          ],
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send message." });
    }
}