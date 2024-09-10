const contactService = require('../services/ContactService');

class ContactController {
    async create(req, res) {
        try {
            const contact = await contactService.create(req.body);
            res.status(201).json(contact);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const contacts = await contactService.getAll();
            res.json(contacts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const contact = await contactService.getById(req.params.id);
            if (!contact) {
                return res.status(404).json({ error: 'Contact not found' });
            }
            res.json(contact);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const contact = await contactService.update(req.params.id, req.body);
            if (!contact) {
                return res.status(404).json({ error: 'Contact not found' });
            }
            res.json(contact);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const contact = await contactService.delete(req.params.id);
            if (!contact) {
                return res.status(404).json({ error: 'Contact not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ContactController();
