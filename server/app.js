const express = require("express");
const cors = require("cors");
const { SERVER_HOST, SERVER_PORT } = require("./config/secrets.js");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const connection = require("./config/db.js");
const userRoute = require("./routes/userRoute.js");
const app = express();
// DB CONNECTION
connection();

// CORS
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));

//middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger documentation route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route middleware
app.use("/api/user", userRoute);

// SERVER
app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`Server is running at http://${SERVER_HOST}:${SERVER_PORT}`);
  console.log(
    `Swagger docs are available at http://${SERVER_HOST}:${SERVER_PORT}/api-docs`
  );
});
