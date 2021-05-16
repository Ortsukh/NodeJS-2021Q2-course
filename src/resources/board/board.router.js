const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const users = await boardService.getAll();
  res.json(users.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await boardService.get(req.params.id);
  res.status(200).json(Board.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const board = await boardService.create(
    new Board({
      title: req.body.title,
      columns: req.body.columns,
    })
  );
  res.status(201).json(Board.toResponse(board));
});
router.route('/:id').put(async (req, res) => {
  const params = { title: req.body.title, columns: req.body.columns };
  
  const board = await boardService.update(req.params.id, params);
  res.status(200).json(Board.toResponse(board));
});
router.route('/:id').delete(async (req, res) => {
  await boardService.remove(req.params.id);

  res.sendStatus(204);
});
module.exports = router;
