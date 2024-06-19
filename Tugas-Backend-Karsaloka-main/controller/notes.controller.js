import { executeQuery } from "../database/db.js";

export const getNotes = async (req, res) => {
    try {
        const result = await executeQuery('SELECT * FROM notes');
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).json({ msg: "An error occurred on the server" });
    }
};

export const insertNotes = async (req, res) => {
    const { title, datetime, note } = req.body;
    try {
        await executeQuery("INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)", [title, datetime, note]);
        return res.status(200).json({ msg: "Note added" });
    } catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).json({ msg: "An error occurred on the server" });
    }
};

export const updateNotes = async (req, res) => {
    const { title, datetime, note } = req.body;
    const { id } = req.params;
    try {
        await executeQuery("UPDATE notes SET title=?, datetime=?, note=? WHERE id=?", [title, datetime, note, id]);
        return res.status(200).json({ msg: "Note updated" });
    } catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).json({ msg: "An error occurred on the server" });
    }
};

export const deleteNotes = async (req, res) => {
    const { id } = req.params;
    try {
        await executeQuery("DELETE FROM notes WHERE id=?", [id]);
        return res.status(200).json({ msg: "Note deleted" });
    } catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).json({ msg: "An error occurred on the server" });
    }
};

export const getNotesById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await executeQuery('SELECT * FROM notes WHERE id=?', [id]);
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).json({ msg: "An error occurred on the server" });
    }
};

export const getNotesTest = async (req, res) => {
    const { id, name } = req.query;
    console.log(id, name);
    console.log("Endpoint called");
    try {
        const result = await executeQuery('SELECT * FROM notes WHERE id=? AND name=?', [id, name]);
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).json({ msg: "An error occurred on the server" });
    }
};
