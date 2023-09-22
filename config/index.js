const dotenv = require("dotenv");

dotenv.config();

const dev = {
    app: {
        stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    }
}

module.exports = dev;