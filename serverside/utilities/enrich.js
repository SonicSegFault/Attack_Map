const geoip = require('geoip-lite');

const BENGALURU = { lat: 12.9716, lng: 77.5946 };

async function enrich(newData = []) {
  if (!Array.isArray(newData)) return [];

  return newData.map((rec) => {
    // normalize ip and country field names from incoming API
    const ip = rec.ipAddress || rec.ip || rec.ip_addr || null;
    const countryFromRec = rec.countryCode || rec.country || null;

    // geoip-lite lookup (may return null)
    const geo = ip ? geoip.lookup(ip) : null;
    const startLat = geo?.ll?.[0] ?? null;
    const startLng = geo?.ll?.[1] ?? null;

    // lastReportedAt - normalize to Date or null
    let lastReportedAt = null;
    if (rec.lastReportedAt) {
      const d = new Date(rec.lastReportedAt);
      if (!isNaN(d.getTime())) lastReportedAt = d;
    } else if (rec.last_reported_at) {
      const d = new Date(rec.last_reported_at);
      if (!isNaN(d.getTime())) lastReportedAt = d;
    }

    return {
      ipAddress: ip,
      countryCode: countryFromRec || geo?.country || null,
      abuseConfidenceScore:
        rec.abuseConfidenceScore ?? rec.abuse_score ?? rec.confidence ?? null,
      lastReportedAt,
      startLat,
      startLng,
      // end is always Bengaluru as requested
      endLat: BENGALURU.lat,
      endLng: BENGALURU.lng,
    };
  });
}

module.exports = enrich;