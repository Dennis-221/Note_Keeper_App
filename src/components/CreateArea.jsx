import React, { useState } from "react";

function CreateArea(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  function handleChange1(event) {
    setNoteTitle(event.target.value);
  }

  function handleChange2(event) {
    setNoteContent(event.target.value);
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onAdd(noteTitle, noteContent);
          event.preventDefault();
          setNoteTitle("");
          setNoteContent("");
        }}
      >
        <input name="title" placeholder="Title" onChange={handleChange1} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange2}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
