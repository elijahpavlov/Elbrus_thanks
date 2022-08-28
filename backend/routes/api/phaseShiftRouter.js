const PhaseShiftRouter = require('express').Router();
const { Student } = require('../../db/models');

//Отправляет массив со студентами с азпрашиваемой фазе
PhaseShiftRouter.get('/phase/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const students = await Student.findAll({ raw: true, where: { phase: id } });
    res.json(students);
  } catch (error) {
    res.redirect('/error');
  }
});

// Меняет статус студента на повтор
PhaseShiftRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Student.update({ status: 'povtor' }, { where: { id } });
    const student = await Student.findOne({ raw: true, where: { id }});
    res.json(student);
  } catch (error) {
    res.json({ status: false });
  }
});

// Удаляет 3 фазу, другие фазы переносит, повторщиков не трогает
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
