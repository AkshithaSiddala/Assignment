"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app = require('./app');
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./Config/logger"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    logger_1.default.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
