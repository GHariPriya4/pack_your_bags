const express = require("express");
const app = express();

app.use(express.static("public"));

// Add middleware to parse the request body
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
const path = require("path");

mongoose
  .connect("mongodb://127.0.0.1:27017/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

const userSchema = new mongoose.Schema({
  email: String,
  fName: String,
  lName: String,
  country: String,
  subject: String,
});

const MyUser = mongoose.model("MyUser", userSchema);

app.post("/", async function (req, res) {
  try {
    const user = new MyUser({
      email: req.body.email,
      fName: req.body.fName,
      lName: req.body.lName,
      country: req.body.country,
      subject: req.body.subject,
    });

    await user.save(); // Use await with save() to handle the promise

    res.redirect("/submit");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public","index.html"));
});

app.get("/submit", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "submit.html"));
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});

  