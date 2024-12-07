import NGO from '../models/NGO.js';
import bcrypt from 'bcryptjs';

export const registerNGO = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newNGO = new NGO({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
        });

        await newNGO.save();
        res.status(201).json({ message: 'NGO registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const loginNGO = async (req, res) => {
    try {
        const { email, password } = req.body;
        const ngo = await NGO.findOne({ email });

        if (!ngo) {
            return res.status(404).json({ message: 'NGO not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, ngo.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful', ngo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
