import mongoose, { Schema, model, models } from "mongoose";

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    tags: [String],
    price: { type: Number, required: true },
    images: [{ type: String }],
    stock: { type: Number, default: 0 },
    dealTag: {
      type: String,
      enum: [
        "Trending",
        "Smart",
        "Speedy",
        "Most Popular",
        "Low",
        "New",
        "Hot",
      ],
      default: null,
    },

    // References
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    // Extra metadata
    isActive: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

itemSchema.index({ name: "text", description: "text", tags: "text" });

export const Item = models.Item || model("Item", itemSchema);
