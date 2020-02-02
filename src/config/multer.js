const crypto = require('crypto');
const path = require('path');
const multer = require('multer');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, raw) => {
        if (err) return cb(err);

        return cb(null, raw.toString('hex') + path.extname(file.originalname));
      });
    },
  }),
};
