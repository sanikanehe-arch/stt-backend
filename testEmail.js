const transporter = require("./config/email");
require("dotenv").config();

async function sendEmail() {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "Test Email",
            html: `
                <h2>Hello Sanika</h2>
                <p>This is a test email from Node.js.</p>
            `
        });

        console.log("Email sent:", info.messageId);

    } catch (error) {
        console.log("Email error:", error.message);
    }
}

sendEmail();