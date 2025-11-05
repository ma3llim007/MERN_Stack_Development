import path from "path";
import fs from "fs";
import type { INote, TAddNoteCommand, TStore } from "./types.js";
import chalk from "chalk";
import { newNoteAdded, searchResultsTables, showNotesTable } from "./utils.js";
import { nanoid } from "nanoid";

const DATA_DIR = path.resolve(".data");
const DATA_FILE = path.resolve(DATA_DIR, "notes.json");

// Helper to ensure the data directory & file exist
const ensureDataFile = (): void => {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
        console.log(chalk.yellow(`📁 Created folder: ${DATA_DIR}`));
    }

    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, "[]", "utf-8");
        console.log(chalk.yellow("🗒️  Created new notes.json file."));
    }
};

// Read All Notes From File
const readNotes = (): TStore => {
    try {
        ensureDataFile();
        const data = fs.readFileSync(DATA_FILE, "utf-8");
        return data?.trim() ? JSON.parse(data) : [];
    } catch (error) {
        console.error(chalk.red("⚠️  Error reading notes file:"), error);
        return [];
    }
};

// Write All Notes
const saveNotes = (notes: INote[]): void => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(notes, null, 2), "utf-8");
    } catch (error) {
        console.error(chalk.red("⚠️  Error writing notes file:"), error);
    }
};

// Add new notes
const addNotes = (note: TAddNoteCommand): void => {
    if (!note.title || !note.description) {
        console.log(chalk.red("❌  Title and Description Is Required"));
    }

    const notes = readNotes();

    // Prevent Duplicates
    const duplicate = notes.find((n) => n.title.toLowerCase() === note.title.toLowerCase());
    if (duplicate) {
        console.log(chalk.red(`⚠️  Note With Title ${note.title} Already Exists.`));
        return;
    }

    const newNote: INote = {
        id: nanoid(8).toLowerCase(),
        title: note.title,
        description: note.description,
        tags: note.tags,
        createdAt: new Date().toLocaleString(),
    };

    notes.push(newNote);
    saveNotes(notes);
    newNoteAdded(newNote);
};

// List all notes
const listNotes = (): void => {
    const notes = readNotes();

    if (notes.length === 0) {
        console.log(chalk.yellow(`📄  No Notes Yet.`));
        return;
    }

    showNotesTable(notes);
};

// Delete notes
const deleteNotes = (id: string): void => {
    if (!id) {
        console.log(chalk.red("❌  Note ID Is Required"));
    }

    const notes = readNotes();
    const noteExists = notes.some((n) => n.id === id);

    if (!noteExists) {
        console.log(chalk.red(`❌  No note found with ID: ${id}`));
    }

    const deleteNotes = notes.filter((note) => note.id !== id);

    saveNotes(deleteNotes);
    console.log(chalk.green(`✔️  Note deleted successfully`));
};

// Search Note
const searchNote = (query: string): void => {
    if (!query) {
        console.log(chalk.red("❌  Query Is Required For Searching Note"));
        return;
    }

    const notes = readNotes();
    const q = query.toLowerCase();

    const findNotes = notes.filter((note) => note.title.includes(q) || note.description.includes(q) || note.tags?.includes(q));

    if (findNotes.length === 0) {
        console.log(chalk.red(`❌  No notes found for the query: "${query}"`));
        return;
    }
    
    searchResultsTables(findNotes);
};

export { listNotes, addNotes, deleteNotes, searchNote };
