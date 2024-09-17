"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const datacontroller_1 = require("../controllers/datacontroller");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get('/', datacontroller_1.getAllData);
router.post('/', authMiddleware_1.protect, datacontroller_1.createData);
exports.default = router;
