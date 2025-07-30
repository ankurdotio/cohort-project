const app = require("./src/app");
const connectDB = require("./src/configs/db");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
