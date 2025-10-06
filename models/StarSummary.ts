import { Schema, models, model } from "mongoose";

const starSummarySchema = new Schema({
  itemId: { type: Schema.Types.ObjectId, ref: "Item", unique: true },
  star1: { type: Number, default: 0 },
  star2: { type: Number, default: 0 },
  star3: { type: Number, default: 0 },
  star4: { type: Number, default: 0 },
  star5: { type: Number, default: 0 },
});

export const StarSummary =
  models.StarSummary || model("StarSummary", starSummarySchema);
