const { Resend } = require("resend")
const { RESEND_API_KEY } = require("../config/environment")

const resend = new Resend(RESEND_API_KEY)


const sendEmailTo = (from, to, subject, html) => {
    resend.emails.send({
        from: from,
        to: to,
        subject: subject,
        html: html
      });

}


module.exports = {
    sendEmailTo: sendEmailTo
}