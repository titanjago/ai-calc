const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Replace <your-db-connection-string> with your actual MongoDB connection string
mongoose.connect('mongodb+srv://Justinlee781:Pinittowinit762@cluster0.ckafnbf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Email = mongoose.model('Email', emailSchema);

app.use(cors());
app.use(express.json());

app.post('/api/emails', async (req, res) => {
  try {
    const newEmail = new Email(req.body);
    const savedEmail = await newEmail.save();
    res.status(201).json(savedEmail);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
