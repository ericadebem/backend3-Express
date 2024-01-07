import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    studentsFirstName: String,
    studentsLastName: String,
    studentsActive: String,
    age: Number,
  },
  {
    versionKey: false,
    collection: "students",
  }
);

export const Students = mongoose.model("Students", StudentSchema);
