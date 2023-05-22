const { Campus } = require('../../db/models');

exports.getAllCampuses = async (req, res) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving campuses' });
  }
};

exports.getCampusById = async (req, res) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    if (!campus) {
      res.status(404).json({ message: 'Campus not found' });
    } else {
      res.json(campus);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving campus' });
  }
};

exports.createCampus = async (req, res) => {
  try {
    const campus = await Campus.create(req.body);
    res.status(201).json(campus);
  } catch (error) {
    res.status(500).json({ message: 'Error creating campus' });
  }
};

exports.updateCampus = async (req, res) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    if (!campus) {
      res.status(404).json({ message: 'Campus not found' });
    } else {
      await campus.update(req.body);
      res.json(campus);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating campus' });
  }
};

exports.deleteCampus = async (req, res) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    if (!campus) {
      res.status(404).json({ message: 'Campus not found' });
    } else {
      await campus.destroy();
      res.json({ message: 'Campus deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting campus' });
  }
};
