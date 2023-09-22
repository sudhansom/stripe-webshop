const express = require("express");

const dev = require('../config/index');
const route = express.Router();

const stripe = require("stripe")(dev.app.stripeSecretKey);

route.post("/checkout", async (req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.items.map((item) => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [item.product]
                    },
                    unit_amount: item.price,
                },
                quantity: item.quantity,
            })),
            mode: "payment",
            success_url: "https://stripe-webshop-production.up.railway.app/success.html",
            cancel_url: "https://stripe-webshop-production.up.railway.app/cancel.html",
        });
        res.status(200).json(session);
    }catch(error) {
        return next(error);
    }
})

module.exports = route;