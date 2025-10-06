import { Schema, model, models } from "mongoose";

const messageSchema = new Schema({
  accountName: String,
  title: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const inboxSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    messages: [messageSchema],
  },
  { timestamps: true }
);

export const Inbox = models.Inbox || model("Inbox", inboxSchema);
