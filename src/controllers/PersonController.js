const personService = require('../services/PersonService');

class PersonController {
    async create(req, res) {
        try {
            if (!Array.isArray(req.body)) {
                return res.status(400).json({ error: 'O payload deve ser um array de pessoas.' });
            }
            const createdPersons = await personService.create(req.body);
            res.status(201).json(createdPersons);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const persons = await personService.getAll();
            res.json(persons);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const person = await personService.getById(req.params.id);
            if (!person) {
                return res.status(404).json({ error: 'Person not found' });
            }
            res.json(person);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const person = await personService.update(req.params.id, req.body);
            if (!person) {
                return res.status(404).json({ error: 'Person not found' });
            }
            res.json(person);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const person = await personService.delete(req.params.id);
            if (!person) {
                return res.status(404).json({ error: 'Person not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PersonController();
