const User = require('../models/User');
const asyncHandler = require('../middleware/async');

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private/Admin

exports.getUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({ success: true, count: users.length, data: users });
  next();
};

// @desc      Get single user
// @route     GET /api/v1/users:id
// @access    Private/Admin

exports.getUser = async (req, res, next) => {
  const users = await User.findById(req.params.id);

  res.status(200).json({ success: true, count: users.count, data: users });
  next();
};

// @desc      Create user
// @route     POST /api/v1/users
// @access    Public

exports.createUser = async (req, res, next) => {
  console.log(req);
  const users = await User.create(req.body);

  res.status(201).json({ success: true, data: users });
  next();
};
