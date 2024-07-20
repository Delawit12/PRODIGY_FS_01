const isAdmin = (req, res, next) => {
  try {
    const role = req.role;

    //  not an admin
    if (role != "admin") {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access. Admin role required.",
      });
    }

    //   user is an admin so proceed to next
    next();
  } catch (err) {
    console.error("Error in authorization:", err);
    console.log("Error in authorization:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};

module.exports  = isAdmin;
