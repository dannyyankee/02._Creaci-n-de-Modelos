const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const sequelize = require("./bd/conection");



const PORT = 3000;

app.use(bodyParser.json());
bodyParser.urlencoded({ extended: false });

const router = require("./routes/index");

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sequelize.sync({ force: false })
    .then(() => console.log("Conectado a almacen!!"));
});
