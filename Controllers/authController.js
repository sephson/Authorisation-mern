const User = require("../Models/UserModel");
const ErrorResponse = require("../Utils/errorResponse");
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next();
  }
};

exports.login = async (req, res, next) => {
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid Cred", 404));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid Cred", 401));
    }

    res.status(200).json({
      success: true,
      token: "jdheieopiwjp3i439082",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.forgotPass = (req, res, next) => {
  res.send("forget password Route");
};

exports.resetPass = (req, res, next) => {
  res.send("reset password Route");
};
