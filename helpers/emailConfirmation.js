const nodemailer = require('nodemailer');
const transporter = nodemailer;


module.exports = class EmailConfirmation{
    async static signUpEmail(sender, recipient, emailSubject, text, content){
        const message = {
            from: sender,
            to: recipient,
            subject: emailSubject,
            text,
            html: content
        }   
        return await transporter.sendMail(message)
    }
}