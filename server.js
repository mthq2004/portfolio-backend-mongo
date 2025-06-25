require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(process.env.PORT, () => console.log("Server running on port", process.env.PORT)))
  .catch(err => console.error("MongoDB error:", err));

  app.get('/', (req, res) => {
  res.send('API is running...');
});
