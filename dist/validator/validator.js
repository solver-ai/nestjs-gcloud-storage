"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const enums_1 = require("../common/enums");
const file_exception_1 = require("../exceptions/file.exception");
const encDetector = require("detect-character-encoding");
exports.validate = (file, type) => __awaiter(void 0, void 0, void 0, function* () {
    if (file) {
        const { buffer, mimetype } = file;
        validateFileEncoding(buffer);
        validateContentType(mimetype);
    }
    else {
        throw new file_exception_1.NoFileException(enums_1.ERROR_MESSAGE.NO_FILE_ERROR);
    }
});
const validateFileEncoding = (buffer) => {
    const { encoding } = encDetector(buffer);
    if (encoding && encoding == 'UTF-8') {
        return null;
    }
    else {
        throw new file_exception_1.InvalidFileFormatException(enums_1.ERROR_MESSAGE.ENCODING_ERROR);
    }
};
const validateContentType = (mimetype) => {
    if ((mimetype === null || mimetype === void 0 ? void 0 : mimetype.match(/text\/csv/)) || (mimetype === null || mimetype === void 0 ? void 0 : mimetype.match(/application\/json/))) {
        return null;
    }
    else {
        throw new file_exception_1.InvalidFileFormatException(enums_1.ERROR_MESSAGE.MIME_TYPE_ERROR);
    }
};
