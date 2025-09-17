const Blacklist = require("../model/blacklistSchema");
const asyncHandler = require("express-async-handler");
//des createattack
//path POST 
//access Public
const createattack = async (req,res) => {
    try{
        const attack = await Blacklist.create(req.body);
        res.status(201).json(attack);
    } catch(err){
        res.status(400).json({ error: err.message })
        console.log(err);
    }
}

//des getAttack
//Path GET
//access Public
const getAttack = asyncHandler(async (req,res) => {
    const attacks = await Blacklist.find({});
    res.status(200).json(attacks);
})


module.exports = { createattack, getAttack };