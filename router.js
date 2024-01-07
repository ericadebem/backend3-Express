import express from "express";
import { getStudents, postStudents, getAllStudents } from "./controler.js";
export const studentsRouter = express.Router();

studentsRouter.route("/:id").get(getStudents);
studentsRouter.route("/").post(postStudents).get(getAllStudents);
