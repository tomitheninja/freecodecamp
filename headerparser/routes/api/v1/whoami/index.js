// imports
const express = require("express");

// instances
const router = express.Router();

// middleware
router.use("//", async (req, res) => {
  const { ip: ipaddress, headers: { 'user-agent': software, 'accept-language': language } } = req
  res.json({
    ipaddress,
    language,
    software,
  })
});

// export
module.exports = router;
