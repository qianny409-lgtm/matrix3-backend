import mongoose from "mongoose";

const repositorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  link: String,
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

export default mongoose.model("Repository", repositorySchema);
