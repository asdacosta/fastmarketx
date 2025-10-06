import mongoose, { Schema, models, model } from "mongoose";

const businessHourSchema = new Schema(
  {
    day: { type: String, required: true },
    open: { type: String },
    close: { type: String },
    closed: { type: Boolean, default: false },
  },
  { _id: false }
);

const storeSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    slogan: { type: String, required: true },
    description: { type: String, required: true },
    contact: {
      mobileNumber: { type: String },
      whatsappNumber: { type: String },
      momoNumber: { type: String },
    },
    campus: { type: String, required: true },
    storeType: { type: String, required: true },
    storeCategories: { type: [String], required: true },
    busHours: { type: [businessHourSchema], required: true }, // Array of days
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    logo: { type: String, required: true },
    banner: { type: String, required: true },
    isPublic: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Store = models.Store || model("Store", storeSchema);
