import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Announcement", announcementSchema);
