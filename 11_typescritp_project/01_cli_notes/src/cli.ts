import { addNotes, deleteNotes, listNotes, searchNote } from "./notesStore.js";
import type { TCommandsTypes } from "./types.js";
import { showOptions } from "./utils.js";

const CommandExecution = () => {
    const args = process.argv.splice(2);
    const command = (args[0]?.toLowerCase() as TCommandsTypes) ?? "help";

    switch (command) {
        case "add": {
            addNotes({ title: args[1] ?? "", description: args[2] ?? "", tags: args[3] ?? "" });
            break;
        }
        case "list":
            listNotes();
            break;
        case "delete":
            deleteNotes(args[1] ?? "");
            break;
        case "search":
            searchNote(args[1] ?? "");
            break;
        case "help":
        default:
            showOptions();
            break;
    }
};

export default CommandExecution;
