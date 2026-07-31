import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  name: string;
  description: string;
  schedule: string;
  maxAttendance: number;
}

const ActivitySchema = new Schema<IActivity>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  schedule: { type: String, required: true },
  maxAttendance: { type: Number, required: true },
});

export default mongoose.model<IActivity>('Activity', ActivitySchema);
