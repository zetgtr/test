module.exports = (app) => {
  const test = require("../controllers/test.controller.js");

  var router = require("express").Router();

  router.post("/", test.create);

  router.get("/", test.findAll);

  app.use("/api/test", router);
};
