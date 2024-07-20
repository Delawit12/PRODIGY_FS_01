const jwt =require( "jsonwebtoken");
const { JWT_SECRET } =require( "../config/secrets.js");

const auth = (req, res, next) => {
  try {
    const token = req.header("authorization");
    console.log("token", token);
    if (!token)
      return res
        .status(401)
        .json({ message: "No authentication token, authorization denied." });

    const verified = jwt.verify(token, JWT_SECRET);
    if (!verified)
      return res
        .status(401)
        .json({ message: "Token verification failed, authorization denied." });

    console.log("verified", verified);
    req.body.id = verified.id;
    req.body.email = verified.email;
    req.role = verified.role;

    next();
  } catch (err) {
    console.error("Error in authentication:", err);
    console.log("Error in authentication:", err);
    res.status(500).json({
      error: err.message,
    });
  }
};

module.exports = auth;
