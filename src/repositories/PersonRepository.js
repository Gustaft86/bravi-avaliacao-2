const Person = require('../models/Person');

class PersonRepository {
    async create(person) {
        return await Person.create(person);
    }

    async findById(id) {
        return await Person.findById(id);
    }

    async update(id, personData) {
        return await Person.findByIdAndUpdate(id, personData, { new: true });
    }

    async delete(id) {
        return await Person.findByIdAndDelete(id);
    }

    async findAll() {
        return await Person.find();
    }
}

module.exports = new PersonRepository();
