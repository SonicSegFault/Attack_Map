//API Controler
//API PATH: /api/fetchblacklistApi
const Blacklist = require("../model/blacklistSchema");
const fetchBlacklistApi = require("../api/fetchBlacklistApi");
const asyncHandler = require("express-async-handler");

const enrich = require("../utilities/enrich");

const updateBlacklist = asyncHandler(async () => {
    const newData = await fetchBlacklistApi({ confidenceMinimum: 90, limit: 100 });
    if(newData?.length){
        const enrichData = await enrich(newData);
        await Blacklist.deleteMany({}); await Blacklist.insertMany(enrichData);
        console.log("Database Upated")
    } else {
        console.log("Skipped update — API returned no data");
    }    
})

module.exports = updateBlacklist;