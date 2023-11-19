const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./db");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send({
    message: "API is working now",
  });
});

app.listen(port, async () => {
  try {
    await connectDb;
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
  console.log("Server is running on port number", port);
});
