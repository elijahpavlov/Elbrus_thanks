const listRouter = require("express").Router();
const { Student } = require("../../db/models");

listRouter.get("/list", async (req, res) => {
  try {
    const students = await Student.findAll({
      order: [
        ["thanks", "DESC"],
        // ['id', 'DESC'],
      ],
    });
    res.json(students);
  } catch (error) {
    res.redirect("/error");
  }
});

module.exports = listRouter;
