const editRouter = require('express').Router();
const { Student } = require('../../db/models');

editRouter.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(Number(req.params.id));

    if (!student) {
      res.status(404).json({ success: false, message: 'Нет такого студента' });
      return;
    }

    if (req.body.status === 'changeStudent') {
      student.name = req.body.name;
      student.phase = req.body.phase;
    }

    await student.save();
    res.json(student);
  } catch (error) {
    res.redirect('/error');
  }
});

module.exports = editRouter;
