import React from "react";

function Note(props) {
  if (props.title === "" || props.content === "") {
    return <p></p>;
  } else {
    return (
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default Note;
