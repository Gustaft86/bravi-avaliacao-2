const Contact = require('../models/Contact');

class ContactRepository {
    async create(contact) {
        return await Contact.create(contact);
    }

    async findById(id) {
        return await Contact.findById(id).populate('person');
    }

    async update(id, contactData) {
        return await Contact.findByIdAndUpdate(id, contactData, { new: true });
    }

    async delete(id) {
        return await Contact.findByIdAndDelete(id);
    }

    async findByPersonId({personId}) {
        return await Contact.find({ person: personId });
    }
}

module.exports = new ContactRepository();
