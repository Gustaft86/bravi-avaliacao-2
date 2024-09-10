const personRepository = require('../repositories/PersonRepository');

class PersonService {
    async create(person) {
        return await personRepository.create(person);
    }

    async getAll() {
        return await personRepository.findAll();
    }

    async getById(id) {
        return await personRepository.findById(id);
    }

    async update(id, personData) {
        return await personRepository.update(id, personData);
    }

    async delete(id) {
        return await personRepository.delete(id);
    }
}

module.exports = new PersonService();
