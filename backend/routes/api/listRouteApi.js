const listRouter = require("express").Router();
const { Student } = require("../../db/models");

listRouter.get("/", async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.redirect("/error");
  }
});

module.exports = listRouter;
