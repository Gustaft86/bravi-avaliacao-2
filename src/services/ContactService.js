const contactRepository = require('../repositories/ContactRepository');

class ContactService {
    async create(contact) {
        return await contactRepository.create(contact);
    }

    async getById(id) {
        return await contactRepository.findById(id);
    }

    async update(id, contactData) {
        return await contactRepository.update(id, contactData);
    }

    async delete(id) {
        return await contactRepository.delete(id);
    }

    async getByPersonId(personId) {
        return await contactRepository.findByPersonId(personId);
    }
}

module.exports = new ContactService();
