const mongoose = require("mongoose");
const Vehicle = require("../models/vehicleModel");

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().sort({ createdAt: -1 });
    res.status(200).json(vehicles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something happened, please try again" });
  }
};

const addVehicle = async (req, res) => {
  const vehicle = req.body;

  console.log(vehicle);

  try {
    const newVehicle = await Vehicle.create(vehicle);
    res.status(200).json(newVehicle);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const deleteVehicle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Vehicle not found." });
  }

  const vehicle = await Vehicle.findById(id);

  if (!vehicle) {
    return res.status(404).json({ error: "Vehicle not found." });
  }

  try {
    await Vehicle.findByIdAndDelete(id);

    res.status(200).json({ message: "Vehicle deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong. please try again" });
  }
};

const updateVehicle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Vehicle not found" });
  }
  const vehicle = req.body;

  const oldVehicle = await Vehicle.findById(id);

  if (!oldVehicle) {
    return res.status(404).json({ error: "Vehicle not found" });
  }

  try {
    const updatedVehicle = await Vehicle.findOneAndUpdate(
      { _id: id },
      {
        ...vehicle,
      }
    );

    res.status(200).json(updatedVehicle);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong. please try again" });
  }
};

module.exports = {
  getAllVehicles,
  addVehicle,
  deleteVehicle,
  updateVehicle,
};
