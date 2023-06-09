const sgMail = require("@sendgrid/mail")
require("dotenv").config()
const { SENDGRID_API_KEY, PROJECT_MAILBOX } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

// const email = {
//     to: "artemskyart@gmail.com",
//     from: "artemskyart@gmail.com",
//     subject: "Hello",
//     text: "Hello world",
//     html: "<p>Test email</p>"
// }


const sendEmail = async (data) => {
    const email = { ...data, from: PROJECT_MAILBOX};
    await sgMail.send(email)
    return console.log("Successfully sent");
}

// sgMail.send(email).then((=> {
//     console.log("Successfully sent");
// })).catch(error => console.log(error))

module.exports = sendEmail;