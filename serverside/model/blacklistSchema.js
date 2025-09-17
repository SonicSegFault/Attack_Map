const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  ipAddress: { type: String, required: true },
  countryCode: { type: String },
  abuseConfidenceScore: { type: Number },
  lastReportedAt: { type: Date },
  startLat: {type: Number},
  startLng: {type: Number},
  endLat: {type: Number},
  endLng: {type: Number},
});

module.exports = mongoose.model("Blacklist", blacklistSchema);
