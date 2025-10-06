import mongoose, { Schema, models, model } from "mongoose";

const jobSchema = new Schema(
  {
    name: { type: String, required: true },
    campus: { type: String, required: true },
    jobTypes: [String],
    workLocation: { type: String, required: true },
    skill: { type: String, required: true },
    pay: { type: String, required: true },
    deadline: { type: Date, required: true },
    description: { type: String, required: true },
    location: { type: String },
  },
  { timestamps: true }
);

export const Job = models.Job || model("Job", jobSchema);
