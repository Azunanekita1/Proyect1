//const express = require("express");
import express from "express";
import { obtenerProductos, agregarProductos } from "../controllers/productosController.js";
const router = express.Router();



router.get("/", obtenerProductos);
router.post("/", agregarProductos);

//module.exports = router;

export default router;
