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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleData = exports.createData = exports.getAllData = void 0;
const dataModels_1 = __importDefault(require("../models/dataModels"));
const getAllData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 10, sort = '-createdAt', title } = req.query;
    try {
        const query = title ? { title: { $regex: title, $options: 'i' } } : {};
        const data = yield dataModels_1.default.find(query)
            .sort(String(sort))
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit));
        const count = yield dataModels_1.default.countDocuments(query);
        res.json({ data, total: count, page, pages: Math.ceil(count / Number(limit)) });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getAllData = getAllData;
const createData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    try {
        const data = new dataModels_1.default({ title, description });
        yield data.save();
        res.status(201).json(data);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.createData = createData;
const getSingleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield dataModels_1.default.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getSingleData = getSingleData;
