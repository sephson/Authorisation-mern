require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./Middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/authRoute"));
app.use(errorHandler); //error middleware should be the last piece of middleware
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log("Server is running"));

process.on("unhandledRejection", (err) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
