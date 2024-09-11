const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const personRoutes = require('./routes/personRoutes');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI, {})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/api/persons', personRoutes);
app.use('/api/contacts', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
