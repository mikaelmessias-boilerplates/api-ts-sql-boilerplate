import crypto from 'crypto';
import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      const hash = crypto.randomBytes(6).toString('hex');

      const filename = `${file.originalname}-${hash}`;

      callback(null, filename);
    },
  }),
};
