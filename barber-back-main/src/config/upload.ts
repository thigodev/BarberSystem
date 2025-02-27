import path from "path";
import crypto from "crypto";
import multer from "multer";

const tempFolder = path.resolve(__dirname, "..", "..", "temp");

export default {
  tempFolder,
  uploadsFolder: path.resolve(tempFolder, "avatares"),

  storage: multer.diskStorage({
    destination: tempFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
