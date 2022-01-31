const User = require('../models/User');

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private/Admin

exports.getUsers = async (req, res) => {
  try {
    res.status(200).json({ success: true, msg: `Show all users ` });
  } catch (error) {}
};

// @desc      Get single user
// @route     GET /api/v1/users:id
// @access    Private/Admin

exports.getUser = async (req, res) => {
  try {
    res.status(200).json({ success: true, msg: `Show user ${req.params.id}` });
  } catch (error) {}
};
