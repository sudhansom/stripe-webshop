const express  = require("express");

const cors = require("cors");
const bodyparser = require("body-parser");

const stripeRoute = require("./routes/stripe")

const port = 4242;

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cors({origin: true, credentials: true}));



app.use("/stripe", stripeRoute);

app.listen(port, ()=> console.log(`app running at: http://localhost:${port}`))
