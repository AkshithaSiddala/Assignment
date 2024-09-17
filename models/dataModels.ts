import mongoose, { Document, Schema } from 'mongoose';

export interface IData extends Document {
    title: string;
    description: string;
}

const dataSchema: Schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Data', dataSchema)