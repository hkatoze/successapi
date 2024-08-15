const bodyParser = require("body-parser");
const express = require("express");
const { initDb } = require("./src/db/sequelize");
const favicon = require("serve-favicon");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
app
  .use(bodyParser.json())
  .use(cors())
  .use(favicon(__dirname + "/favicon.ico"));
initDb();

/* ........All routes list........... */
require("./src/routes/home")(app);
require("./src/routes/signupToApi")(app);
require("./src/routes/loginToApi")(app);


require("./src/routes/getUserByPk")(app);
require("./src/routes/getAdminByPk")(app);
require("./src/routes/updateUser")(app);
require("./src/routes/deleteUser")(app);
require("./src/routes/getAllUsers")(app);
require("./src/routes/getAllAdmins")(app);
require("./src/routes/signup")(app);
require("./src/routes/login")(app);

require("./src/routes/getTestResultatByPk")(app);
require("./src/routes/updateTestResultat")(app);
require("./src/routes/deleteTestResultat")(app);
require("./src/routes/getAllTestResultat")(app);
require("./src/routes/createTestResultat")(app);

require("./src/routes/getTestByPk")(app);
require("./src/routes/updateTest")(app);
require("./src/routes/deleteTest")(app);
require("./src/routes/getAllTest")(app);
require("./src/routes/createTest")(app);

require("./src/routes/getFiliereByPk")(app);
require("./src/routes/updateFiliere")(app);
require("./src/routes/deleteFiliere")(app);
require("./src/routes/getAllFilieres")(app);
require("./src/routes/createFiliere")(app);

require("./src/routes/getTemperamentByPk")(app);
require("./src/routes/updateTemperament")(app);
require("./src/routes/deleteTemperament")(app);
require("./src/routes/getAllTemperaments")(app);
require("./src/routes/createTemperament")(app);
require("./src/routes/checkLoginDoubleAuthentification")(app);

//404 error managment
app.use(({ res }) => {
  const message = `Impossible de trouver la ressource demandée! Vous pouvez essayer une autre URL.`;
  res.status(404).json({ message });
});

app.listen(port, () => {
  console.log(`Notre api a démaré sur : http://localhost:${port}`);
});

module.exports = app;
