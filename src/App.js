import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NoteForm from "./components/note-form";
import Notes from "./components/notes";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = () => {
    axios("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      setNotes(resp.data);
      console.log(resp.data);
    });
  };

  const removeNote = (id) => {
    if (!id) return;
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/{id}`)
      .then((resp) => {
        const arr = notes.filter((item) => item.id != id);
        setNotes(arr);
        alert("Are you sure");
      })
      .catch((err) => {
        console.log(err);
        alert("Bir hata oluştu");
      });
  };

  const createNote = (note) => {
    axios.post("https://jsonplaceholder.typicode.com/posts", note)
    .then(resp=>{
      setNotes([resp.data, ...notes]);
    })
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col md={3}>
          <NoteForm createNote={createNote} />
        </Col>
        <Col md={9}>
          <Notes data={notes} removeNote={removeNote} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
