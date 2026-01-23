/*const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if(!token){
        res.status(401).json({message:"Not authorized"});
    }
try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded
    // console.log(decoded);
    next()
}catch(error){
    res.send("Invalid token");
}
}*/
const jwt = require('jsonwebtoken');
exports.protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id: ... }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
