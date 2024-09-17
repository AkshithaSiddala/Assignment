"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./Config/db"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const dataRoutes_1 = __importDefault(require("./routes/dataRoutes"));
const errorHandler_1 = require("./middleware/errorHandler");
//Initialize dotenv 
dotenv_1.default.config();
//Initialize 
const app = (0, express_1.default)();
//Connect to the database
(0, db_1.default)();
//middleware
app.use(express_1.default.json());
//API routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/data', dataRoutes_1.default);
//error handler
app.use(errorHandler_1.errorHandler);
//Default route
app.get('/', (req, res) => {
    res.send('API is running');
});
exports.default = app;
