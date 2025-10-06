import mongoose, { Schema, models, model } from "mongoose";

interface ICartItem extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  quantity: number;
}

const cartSchema = new Schema<ICartItem>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, default: 1, min: 1 },
  },
  { timestamps: true }
);

export const Cart = models.Cart || model<ICartItem>("Cart", cartSchema);
