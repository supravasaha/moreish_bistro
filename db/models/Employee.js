import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  employeeID: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  position: { type: String, required: true },
  hourlyRate: { type: Number, required: true },
  rosterDuration: { type: Number, required: true },
  joiningDate: { type: Date, required: true },
  salary: { type: Number, default: 0 },
});

export default mongoose.model('Employee', employeeSchema);
