const express = require("express");
const app = express();

const cors = require("cors");
//app.use(cors());
//enable inproduction
app.use(cors({
  origin: "https://attackmap.netlify.app/", // or your deployed frontend URL
}));

require("dotenv").config();
app.use(express.json());

const connectdb = require("./config/trafficdb")
connectdb();

///timely blacklist updating
const cron = require("node-cron");
const updateBlacklist = require("./controllers/blacklistController");
// updateBlacklist();
cron.schedule("0 0,6,12,18 * * *", ()=> {
    console.log("Updating blacklist...");
    updateBlacklist();
})

//manual input if needed and to access attacks from frontend
const router = require("./routes/attackRoutes");
app.use("/attacks",router);


app.listen(process.env.PORT||8000, ()=>console.log("Server is up"));

