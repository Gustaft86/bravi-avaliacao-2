const contactRepository = require('../repositories/ContactRepository');

class ContactService {
    async create(contact) {
        return await contactRepository.create(contact);
    }

    async getAll() {
        return await contactRepository.findAll();
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

    async getByPerson(personId) {
        return await contactRepository.findByPerson(personId);
    }
}

module.exports = new ContactService();
