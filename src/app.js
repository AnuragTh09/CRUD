import express from "express";
import mongoose from "mongoose";
const app = express();

import { router as productRoute } from "./routes/product.routes.js";

import { Product } from "./models/product.model.js";

// configuration for middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Welcome from Node API server uploaded");
});

export default app;
