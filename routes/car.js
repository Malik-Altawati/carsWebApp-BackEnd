const express = require("express");
const router = express.Router();
const Car = require("../models/Car");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// 🆄🅽🅳🅴🆁 🅳🅴🆅🅴🅻🅾🅿🅼🅴🅽🆃

///// get all cars
router.get("/", (req, res) =>
  Car.findAll()
    .then((cars) => {
      res.status(200).send(cars);
    })
    .catch((err) => {
      console.log(err);
    })
);

///// create a new car
router.post("/create", (req, res) => {
  console.log(req.body, "*********");
  Car.create(req.body)
    .then((car) => {
      return res.status(200).json({ status: true, message: car });
    })
    .catch((err) => {
      console.log(err);
    });
});

///// search for a car
router.get("/search", (req, res) => {
  const { UID } = req.query;
  Car.findAll({ where: { UID: { [Op.like]: "%" + UID + "%" } } })
    .then((cars) => {
      return res.status(200).json({ status: true, message: cars });
    })
    .catch((err) => {
      console.log(err);
    });
});

///// delete a car
router.delete("/", (req, res) => {
  const { id } = req.query;
  Car.destroy({ where: { id: id } })
    .then((data) => {
      if (data === 1) {
        return res.status(200).json({ status: true, message: "car deleted!" });
      } else {
        return res
          .status(200)
          .json({ status: true, message: "car already deleted!" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//// update user

router.post("/update", (req, res) => {
  const { id } = req.body;
  Car.update(req.body, { where: { id } })
    .then((data) => {
      return res.status(200).json({ status: true, message: "car updated!" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
