const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const product = require("./routes/product");
const user = require("./routes/user");
const auth = require("./middleware/auth");

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//   if (req.headers.authorization) {
//     //generic check method for all apis
//     // req.url.startsWith("/api")
//     //checks
//   } else {
//     // not authorized
//   }
//  next();
// });
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/product", auth, product);
app.use("/api/user", user);

// app.get("/", (req, res) => {
//   res.send("Welcome to the Application!!!");
// });

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   );
// }

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
