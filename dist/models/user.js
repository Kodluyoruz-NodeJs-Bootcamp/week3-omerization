"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//user schema is defined
const userSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    password: { type: String },
    token: { type: String },
});
exports.default = mongoose_1.default.model("user", userSchema);
