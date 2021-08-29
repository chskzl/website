const path = require('path');
var router = require('express').Router();
const { v4 } = require('uuid');
fs = require('fs');

router.post('/send-message', async (req, res) => {
  let messageID = v4(); // Generate UUID
  let messagePath = path.join(__dirname, '../../messages/', messageID);

  await fs.writeFile(messagePath, JSON.stringify(req.body), { flag: 'w' }, (err) => {
    if (err) throw err;
  });
});

module.exports = router;