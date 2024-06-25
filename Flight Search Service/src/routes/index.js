const express = require("express");
const router = express.Router();
const airplaneRoutes = require("./airplane.route");
const airportRoutes = require("./airport.route");

router.use("/airplanes", airplaneRoutes);
router.use("/airports", airportRoutes);

module.exports = router;