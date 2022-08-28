const PhaseShiftRouter = require('express').Router();
const { Student } = require('../../db/models');

PhaseShiftRouter.get('/', async (req, res) => {
  try {
    const students = await Student.findAll({
      order: [['thanks', 'DESC']],
    });
    res.json(students);
  } catch (error) {
    res.redirect('/error');
  }
});

PhaseShiftRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStudent = await Student.findAll({raw: true, where: { id } });
    updatedStudent.status = "povtor";
    await Student.update(updatedStudent, { where: {id}});
    res.json({ status: 'povtor' });
  } catch (error) {
    res.json({ status: false });
  }
});

PhaseShiftRouter.put('/', async (req, res) => {
  try {
    await Student.destroy({ where: { phase: 3, status: 'прошел' } });
    await Student.increment({ phase: 1 }, { where: { phase: 2, status: 'прошел' } });
    await Student.increment({ phase: 1 }, { where: { phase: 1, status: 'прошел' } });
    await Student.update({ status: 'прошел' }, { where: { status: 'povtor' } });
    const students = await Student.findAll({ raw: true });
    res.json(students);
  } catch (error) {
    res.redirect('/error');
  }
});

module.exports = PhaseShiftRouter;
