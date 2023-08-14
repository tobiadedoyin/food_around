const {Router} = require("express");
const { getRestaurants, getOneRestaurant, createRestaurant, editRestaurant, deleteRestaurant } = require("../controller/restutant");

const router = Router();

router.get("/", getRestaurants);
router.get("/:id", getOneRestaurant);
router.post("/", createRestaurant);
router.put("/:id", editRestaurant);
router.delete("/:id", deleteRestaurant);

module.exports = router;