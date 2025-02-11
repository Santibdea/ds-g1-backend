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
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: 'dkfzxplwp',
    api_key: '811849389631469',
    api_secret: '1t9pVJrklkNYfhi_JEPbqj5TZ_A'
});
class Uploader {
    uploadImage(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield cloudinary_1.v2.uploader.upload(file);
            return response;
        });
    }
}
exports.default = Uploader;
//# sourceMappingURL=Uploader.js.map