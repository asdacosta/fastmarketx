import mongoose, { Schema, model, models } from "mongoose";

const faqSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// Avoid recompiling model if already compiled
const FAQ = models.FAQ || model("FAQ", faqSchema);

export default FAQ;
