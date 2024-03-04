require('dotenv').config();
const nodemailer = require("nodemailer");
const { MAILER_EMAIL, MAILER_PASSWORD } = process.env;

//Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: MAILER_EMAIL,
        pass: MAILER_PASSWORD
    },
    debug: true
});

const contactMail = (email, name, message) => {
    return mailDetails = {
        from: MAILER_EMAIL,
        to: MAILER_EMAIL,
        subject: `New message in Portfolio.`,
        text:`Hi FGdev, in your portfolio you have been received an comment from ${name}.`,
        html: `<p><b>Hi FGdev, in your portfolio you have been received an comment from ${name}.</b></p><br><blockquote>${message}<\br> from: ${email}</blockquote>`
    }
}