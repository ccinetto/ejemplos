import { Schema, model } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { MongoAtlas } from '../services/mongodb';

interface TaskType {
  _id: string;
  title: string;
  description: string;
  duration: number;
}

const TaskSchema = new Schema<TaskType>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AtlasMongoose = MongoAtlas.getConnection();
export const TaskModel = AtlasMongoose.model<TaskType>('task', TaskSchema);
export const TaskTC = composeWithMongoose(TaskModel);
