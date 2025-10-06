import mongoose, { Schema, models, model } from "mongoose";

const addressSchema = new Schema({
  location: { lat: Number, lng: Number },
  city: String,
  region: String,
  extra: String,
});

const cartItemSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true, min: 1 },
});

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    campus: { type: String, required: true },
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    passwordHash: { type: String, required: true },
    authenticated: { type: Boolean, default: true },
    role: {
      type: String,
      enum: ["customer", "vendor", "admin"],
      default: "customer",
    },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    addresses: [addressSchema],
    cart: [cartItemSchema],
  },
  { timestamps: true }
);

export const User = models.User || model("User", userSchema);
