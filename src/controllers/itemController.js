import { ItemModel } from "../models/itemModel.js";

export const ItemController = {
  async create(req, res) {
    try {
      const { name, owner, status = "Menunggu", notes = "", price = 0 } = req.body;
      if (!name) return res.status(400).json({ error: "Field 'name' required" });
      const item = await ItemModel.create({ name, owner, status, notes, price });
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message ?? err });
    }
  },

  async getAll(req, res) {
    try {
      const { status, owner } = req.query;
      const items = await ItemModel.getAll({ status, owner });
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message ?? err });
    }
  },

  async getById(req, res) {
    try {
      const item = await ItemModel.getById(req.params.id);
      res.json(item);
    } catch (err) {
      res.status(404).json({ error: err.message ?? err });
    }
  },

  async update(req, res) {
    try {
      const updated = await ItemModel.update(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message ?? err });
    }
  },

  async remove(req, res) {
    try {
      await ItemModel.remove(req.params.id);
      res.json({ message: "Item deleted" });
    } catch (err) {
      res.status(400).json({ error: err.message ?? err });
    }
  },
};
