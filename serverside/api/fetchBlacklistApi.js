const axios = require("axios");
const asyncHandler = require("express-async-handler");

//Fetch AbuseIPDB blacklist snapshot.
//- confidenceMinimum: filter out weak signals (75–100 recommended for DoS)
//- limit: how many IPs to pull (free tier snapshot is capped; we’ll keep it small)

const fetchBlacklistApi = asyncHandler(async ({ confidenceMinimum = 90, limit = 100 }) => {
    const url = "https://api.abuseipdb.com/api/v2/blacklist";
    try {
        const res = await axios.get(url, {
            headers: {
                Key: process.env.ABUSEIPDB_KEY,
                Accept: "application/json",
            },
            params: {
                confidenceMinimum,
                limit,
            },
        });
        return res.data.data;
    } catch (err) {
        console.log(err); return [];
    }
})

module.exports = fetchBlacklistApi;