// imports
const express = require("express");

// instances
const router = express.Router();
const dateKey = Symbol("date");

const isUnixDate = d => /^\d{1,}$/.test(d + "");

// middleware
router.use("/:date?", [
  // parse date
  async (req, res, next) => {
    let d;
    if (typeof req.params.date !== "undefined") {
      const { date } = req.params;
      if (isUnixDate(date)) d = new Date(Number.parseInt(date, 10));
      else d = new Date(Date.parse(date));
    } else d = new Date();

    req[dateKey] = d;

    next();
  },
  // validate date
  async (req, res, next) => {
    const d = req[dateKey];
    const isDateType = d instanceof Date;
    const isValidDate = !Number.isNaN(Number(d));
    isDateType && isValidDate ? next() : next(new Error("Invalid Date"));
  },
  // handle valid date
  async (req, res) => {
    const d = req[dateKey];
    res.json({
      unix: d.getTime(),
      utc: d.toUTCString()
    });
  },
  // handle invalid date
  async (err, req, res, next) => {
    res.json({
      unix: null,
      utc: err.message
    });
  }
]);

// export
module.exports = router;
