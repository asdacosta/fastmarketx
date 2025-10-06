import { Schema, models, model } from "mongoose";

const reviewSchema = new Schema({
  itemId: { type: Schema.Types.ObjectId, ref: "Item" },
  accountName: { type: String, required: true },
  title: { type: String, required: true },
  star: { type: Number, min: 1, max: 5 },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Review = models.Review || model("Review", reviewSchema);
