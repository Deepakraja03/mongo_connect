const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Allow requests from the specified frontend origin
app.use(cors());
const dbURI = "mongodb+srv://Deepakraja:Barryallen03@cluster0.3atagu3.mongodb.net/Sample";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Parse incoming JSON data
app.use(express.json());

require("../backend/userDetails")
const User = mongoose.model("UserInfo");
app.post("/register", async(req,res) => {
    const {firstname,email,password} = req.body;
    try {
        await User.create({
          firstname,
          email,
          password
        });
        res.send({status:"ok"});
    } catch (error) {
        res.send({status:"error"})
    }
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
