const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    type: { type: String, required: true, enum: ['email', 'phone', 'whatsapp'] },
    value: { type: String, required: true },
    person: { type: mongoose.Schema.Types.ObjectId, ref: 'Person', required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
