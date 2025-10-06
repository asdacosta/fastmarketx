import mongoose, { Schema, models, model } from "mongoose";

interface IWishlistItem extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  itemId: mongoose.Types.ObjectId;
}

const wishlistSchema = new Schema<IWishlistItem>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    itemId: { type: Schema.Types.ObjectId, ref: "Item", required: true },
  },
  { timestamps: true }
);

export const Wishlist =
  models.Wishlist || model<IWishlistItem>("Wishlist", wishlistSchema);
