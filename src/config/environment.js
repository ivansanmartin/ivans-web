require("dotenv").config();

module.exports = {
    MONGODB_STRING: process.env.MONGODB_STRING,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD
}