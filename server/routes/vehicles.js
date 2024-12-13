const express = require("express");

const {
  getAllVehicles,
  addVehicle,
  deleteVehicle,
  updateVehicle,
} = require("../controllers/vehicleController");

const router = express.Router();

router.get("/", getAllVehicles);

router.post("/", addVehicle);

router.delete("/:id", deleteVehicle);

router.patch("/:id", updateVehicle);

module.exports = router;
