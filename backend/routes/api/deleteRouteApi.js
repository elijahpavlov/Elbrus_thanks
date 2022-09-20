const deleteRouter = require('express').Router();
const { Student } = require('../../db/models');

deleteRouter.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(Number(req.params.id));
    if (!student) {
      res.status(404).json({ success: false, message: 'Нет такого студента' });
      return;
    }

    await Student.destroy({ where: { id: Number(req.params.id) } });
    res.json({ message: 'success' });
  } catch (error) {
    res.redirect('/error');
  }
});

module.exports = deleteRouter;
