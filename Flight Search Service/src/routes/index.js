const express = require("express");
const router = express.Router();
const airplaneRoutes = require("./airplane.route");
const airportRoutes = require("./airport.route");
const cityRoutes = require("./city.route");

router.use("/airplanes", airplaneRoutes);
router.use("/airports", airportRoutes);
router.use("/cities", cityRoutes);

module.exports = router;