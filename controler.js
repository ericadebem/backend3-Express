import { Students } from "./model.js";

export const getStudents = async (req, res) => {
  try {
    const students = await Students.findById(req.params.id);
    students
      ? res.status(201).json({ students })
      : res.status(404).json({ msg: "Students not found" });
  } catch(error) {
    console.error(error.msg);
    res.status(500).json(error);
  }
};
export const postStudents = async (req, res) => {
  try {
    const students = await Students.create(req, body);
        res.status(201).json({ students })
  } catch(error) {
    console.log(error.msg);
    res.status(500).json({ msg: "Students not found" });
  }
}
export const getAllStudents = async (req, res) => {
    try{
        const students = await Students.find();
        res.status(201).json({ students })
        
    } catch(error) {
        console.log(error.msg);
        res.status(500).json(error);
    }
}
