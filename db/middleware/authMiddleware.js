import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// Verify JWT Token
export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized access' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(401).json({ message: 'User not found' });

    req.user = user; // Attach user info
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token', error });
  }
};

// Verify Proprietor Role
export const verifyProprietor = (req, res, next) => {
  if (req.user.role !== 'Proprietor') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};
