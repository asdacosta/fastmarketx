import mongoose, { Schema, models, model } from "mongoose";

interface IFeedback extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  message: string;
}

const feedbackSchema = new Schema<IFeedback>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Feedback =
  models.Feedback || model<IFeedback>("Feedback", feedbackSchema);
