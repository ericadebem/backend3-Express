import express from "express";
import { getStudents, postStudents, getAllStudents, deleteStudent } from "./controler.js";
export const studentsRouter = express.Router();

studentsRouter.route("/:id").get(getStudents).delete(deleteStudent);
studentsRouter.route("/").post(postStudents).get(getAllStudents);
