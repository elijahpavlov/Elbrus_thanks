const PhaseShiftRouter = require('express').Router();
const { Student } = require('../../db/models');

PhaseShiftRouter.get('/:id', async (req, res) => {
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

module.exports = PhaseShiftRouter;
