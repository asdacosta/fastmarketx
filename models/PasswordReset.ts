import { Schema, models, model } from "mongoose";

const passwordResetSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  token: String,
  expiresAt: Date,
});

export const PasswordReset =
  models.PasswordReset || model("PasswordReset", passwordResetSchema);
