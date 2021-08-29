const path = require('path');
var router = require('express').Router();
const { v4 } = require('uuid');
fs = require('fs');

router.post('/save-todo', async (req, res) => {
  let todoListPath = path.join(__dirname, '../', 'todo.txt');

  await fs.writeFile(todoListPath, req.body.text, { flag: 'w' }, (err) => {
    if (err) throw err;
  });
});

module.exports = router;