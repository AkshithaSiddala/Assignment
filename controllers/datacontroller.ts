import { Request, Response } from 'express';
import Data from '../models/dataModels';

export const getAllData = async (req: Request, res: Response) => {
    const { page = 1, limit = 10, sort = '-createdAt', title } = req.query;

    try {
        const query = title ? { title: { $regex: title, $options: 'i' } } : {};
        const data = await Data.find(query)
            .sort(String(sort))
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit));
        
        const count = await Data.countDocuments(query);
        res.json({ data, total: count, page, pages: Math.ceil(count / Number(limit)) });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const createData = async (req: Request, res: Response) => {
    const { title, description } = req.body;

    try {
        const data = new Data({ title, description });
        await data.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getSingleData = async (req: Request, res: Response) => {
    try {
        const data = await Data.findById(req.params.id);

        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};