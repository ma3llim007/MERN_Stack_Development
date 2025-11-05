interface INote {
    id: string;
    title: string;
    description: string;
    tags?: string | undefined;
    createdAt: string;
}

type TStore = INote[];

type TCommandsTypes = "add" | "list" | "delete" | "search" | "help";

type TAddNoteCommand = {
    title: string;
    description: string;
    tags?: string;
};

export type { INote, TCommandsTypes, TStore, TAddNoteCommand };
