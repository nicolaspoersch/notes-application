document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");
    const overlay = document.getElementById("overlay");
    const noteName = document.getElementById("note-name");
    const saveName = document.getElementById("save-name");
    const notesList = document.getElementById("notes-list");
    const noteTitle = document.getElementById("note-title");
    const noteContent = document.getElementById("note-content");
    const saveNote = document.getElementById("save-note");
    const deleteNote = document.getElementById("delete-note");

    let currentNote = null;

    document.getElementById("add-note").addEventListener("click", () => {
        overlay.style.display = "block";

        saveName.addEventListener("click", () => {
            const name = noteName.value;
            if (name) {
                const newNote = document.createElement("li");
                newNote.className = "note-list-item";
                newNote.dataset.name = name;
                newNote.innerHTML = `<button class="btn btn-secondary">${name}</button>`;
                notesList.appendChild(newNote);

                newNote.addEventListener("click", () => {
                    currentNote = newNote;
                    noteName.value = newNote.dataset.name;
                    noteTitle.value = "";
                    noteContent.value = "";
                    noteTitle.focus();
                });

                overlay.style.display = "none";
                noteName.value = "";
            }
        });
    });

    saveNote.addEventListener("click", () => {
        if (currentNote) {
            const title = noteTitle.value;
            const content = noteContent.value;
            if (title !== "" || content !== "") {
                currentNote.innerHTML = `<button class="btn btn-secondary">${title || "Anotação sem título"}</button>`;
            }
        }
    });

    deleteNote.addEventListener("click", () => {
        if (currentNote) {
            notesList.removeChild(currentNote);
            currentNote = null;
            noteName.value = "";
            noteTitle.value = "";
            noteContent.value = "";
        }
    });
});
