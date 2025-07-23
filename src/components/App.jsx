import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([{
     noteTitle: "",
     noteContent:""
  }]);
  
  function addItem(title, content){
    setNoteArray( (prevNotes) => {
       return [...prevNotes, {
         noteTitle: title,
         noteContent: content
       }]
    })
  }

  function deleteItem(id){
     setNoteArray( (prevNotes) => {
       prevNotes.filter((oneNote, index) =>{
          return index !== id;
       })
     })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd = {addItem}/>
      {noteArray.map((oneNote, index) =>{
        return <Note key={index} id = {index} title= {oneNote.noteTitle} content={oneNote.noteContent} onDelete = {deleteItem} />;
      })
      }
      
      <Footer />
    </div>
  );
}

export default App;
