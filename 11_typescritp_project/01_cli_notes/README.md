# CLI Notes App

## Overview
- A simple and elegant command-line notes manager built with TypeScript, Chalk, and CLI-Table3.
- Easily add, view, search, and delete notes right from your terminal — with colorful tables and a clean interface.
- The app stores all your notes in a local `.data/notes.json` file, ensuring persistence between sessions.

## Features
- Add Notes with title, description, and optional tags
- List All Notes in a nicely formatted table
- Search Notes by title, description, or tags
- Delete Notes by ID
- Help Menu to display all available commands
- Persistent local storage using JSON
- Fully written in TypeScript with proper typings and error handling

## Technologies Used
- **TypeScript:** Strongly typed language for maintainability
- **Node.js FS:** File handling (read/write notes)
- **Chalk:** Colorful and styled terminal output
- **CLI-Table3:** Renders data in tabular format
- **NanoID:** Generates unique, short note IDs

## Installation
To set up the project locally, follow these steps:
1. Clone the repository:

    ```bash
    git clone https://github.com/ma3llim007/MERN_Stack_Development/tree/ master/11_typescritp_project/01_cli_notes

    cd 01_cli_notes
    ```

2. Install dependencies:

    ```bash
    yarn install
    # or
    npm install
    ```

3. Run the app in dev mode:
    ```bash
    yarn dev help
    # or
    npm run dev help
    ```


## Usage
The app uses command-line arguments to execute different actions.

1. 📝 Add a New Note:

    ```bash
    yarn dev add "My Title" "This is the description" "tag1,tag2"
    ```

2. yarn dev list

    ```bash
    yarn dev list
    ```

3. Search Notes

    ```bash
    yarn dev search "keyword"
    ```

4. Delete a Note

    ```bash
    yarn dev delete <note-id>
    ```

5. Help Menu:

    ```bash
    yarn dev help
    ```
Displays a table of all available commands.


## Acknowledgements

This project was built using:
- **TypeScript** — for reliable and maintainable code
- **Chalk** — for beautiful terminal output
- **CLI-Table3** — for clean, structured data presentation
- **NanoID** — for unique and compact IDs
- **Node.js FS** — for simple, file-based data persistence