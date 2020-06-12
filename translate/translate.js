"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = void 0;
const dict_he_en_1 = require("./dict-he-en");
function translate(hebrewWord) {
    var _a;
    return (_a = dict_he_en_1.dictionary.find(word => {
        return hebrewWord == word.translated;
    })) === null || _a === void 0 ? void 0 : _a.translation;
}
exports.translate = translate;
//# sourceMappingURL=translate.js.map