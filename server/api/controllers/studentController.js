const { Student } = require('../../db/models');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving students' });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
    } else {
      res.json(student);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving student' });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error creating student' });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
    } else {
      await student.update(req.body);
      res.json(student);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating student' });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
    } else {
      await student.destroy();
      res.status(204).json({ message: 'Student deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student' });
  }
};
