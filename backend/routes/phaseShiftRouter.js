const PhaseShiftRouter = require('express').Router();

PhaseShiftRouter.get('/', async (req, res) => {
  try {
    // const tasks = await Task.findAll({
    //   order: [
    //     ['createdAt', 'DESC'],
    //     ['id', 'DESC'],
    //   ],
    //   // where: {
    //   //   user_id: req.session.userId ?? null,
    //   // },
    // });
    res.json({ sucess: true });
  } catch (error) {
    res.json({ sucess: false });
  }
});

module.exports = PhaseShiftRouter;
