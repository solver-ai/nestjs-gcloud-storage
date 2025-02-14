"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileType = exports.ERROR_MESSAGE = void 0;
var ERROR_MESSAGE;
(function (ERROR_MESSAGE) {
    ERROR_MESSAGE["NO_FILE_ERROR"] = "\uD30C\uC77C\uAC1D\uCCB4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\n\uC5C5\uB85C\uB4DC\uAC00 \uC81C\uB300\uB85C \uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694.";
    ERROR_MESSAGE["FILE_TYPE_ERROR"] = "\uC9C0\uC6D0\uD558\uB294 \uD0C0\uC785\uC774 \uC544\uB2D9\uB2C8\uB2E4.\ncategory, item \uD639\uC740 review\uB97C \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.";
    ERROR_MESSAGE["MIME_TYPE_ERROR"] = "\uC9C0\uC6D0\uD558\uB294 \uD30C\uC77C\uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4.\nCSV \uD639\uC740 JSON \uD615\uC2DD\uC744 \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.";
    ERROR_MESSAGE["ENCODING_ERROR"] = "\uC9C0\uC6D0\uD558\uB294 \uC778\uCF54\uB529\uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4.\nUTF-8\uC744 \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.";
    ERROR_MESSAGE["NOT_FOUND_REQUIRED_COL_ERROR"] = "\uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uCE7C\uB7FC\uC774 \uBE60\uC838\uC788\uC2B5\uB2C8\uB2E4.\n\uD544\uC218\uC785\uB825\uC73C\uB85C \uB9C8\uD0B9\uB41C \uCE7C\uB7FC\uC758 \uB370\uC774\uD130\uAC00 \uB204\uB77D\uB418\uC9C0 \uC54A\uC558\uB294\uC9C0 \uB2E4\uC2DC \uD655\uC778\uD574\uC8FC\uC138\uC694.";
    ERROR_MESSAGE["IS_DELETED_FORMAT_ERROR"] = "\uC0AD\uC81C\uC5EC\uBD80 \uCE7C\uB7FC\uC740 \uBC18\uB4DC\uC2DC Y \uD639\uC740 N\uC73C\uB85C \uC785\uB825\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.";
    ERROR_MESSAGE["FILTER_AND_SORT_FORMAT_ERROR"] = "\uCEE4\uC2A4\uD140\uD544\uB4DC\uB294 \uBC18\uB4DC\uC2DC JSON \uD615\uC2DD\uC73C\uB85C \uC785\uB825\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.";
    ERROR_MESSAGE["DATE_FORMAT_ERROR"] = "\uB0A0\uC9DC\uB294 20221231235959\uACFC \uAC19\uC774 YYYYMMDDHHmmss \uC758 \uD615\uC2DD\uC73C\uB85C \uC81C\uACF5\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.";
    ERROR_MESSAGE["CATE_NAME_FORMAT_ERROR"] = "\uCE74\uD14C\uACE0\uB9AC \uC774\uB984\uC740 \uBC18\uB4DC\uC2DC > \uAD6C\uBD84\uC790\uB85C \uC5F0\uACB0\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.";
    ERROR_MESSAGE["PARSING_ERROR"] = "\uD30C\uC77C\uC744 \uC815\uC0C1\uC801\uC73C\uB85C \uD574\uC11D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\n\uC5D0\uB7EC \uB0B4\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.";
})(ERROR_MESSAGE = exports.ERROR_MESSAGE || (exports.ERROR_MESSAGE = {}));
var FileType;
(function (FileType) {
    FileType["CATEGORY"] = "category";
    FileType["ITEM"] = "item";
    FileType["REVIEW"] = "review";
})(FileType = exports.FileType || (exports.FileType = {}));
