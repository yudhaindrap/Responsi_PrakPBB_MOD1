import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// health
app.get("/", (req, res) => res.json({ message: "Cuci Sepatu API - sehat" }));

// routes
app.use("/api/items", itemRoutes);

// error handler (simple)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
