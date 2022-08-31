const listRouter = require('express').Router();
const { Student } = require('../../db/models');

listRouter.get('/', async (req, res) => {
  try {
    const students = await Student.findAll({
      order: [['thanks', 'DESC']],
    });
    res.json(students);
  } catch (error) {
    res.redirect('/error');
  }
});

listRouter.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(Number(req.params.id));

    if (!student) {
      res.status(404).json({ success: false, message: 'Нет такого студента' });
      return;
    }

    if (req.body.status === 'plus') {
      student.thanks = req.body.thanks + 1;
    } else {
      student.thanks = req.body.thanks - 1;
    }

    await student.save();
    res.json(student);
  } catch (error) {
    res.redirect('/error');
  }
});

module.exports = listRouter;
