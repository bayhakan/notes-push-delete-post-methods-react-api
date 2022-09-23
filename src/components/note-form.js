import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";

const NoteForm = ({createNote}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);    
    }
    const handleBody = (e) => {
        setBody(e.target.value);    
    }
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Not</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitle} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Açıklama</Form.Label>
        <Form.Control type="text" value={body} onChange={handleBody}/>
      </Form.Group>
      <Button variant="warning" onClick={()=>createNote({
        title: title,
        body: body,
        userId:"1"
      })}>Ekle</Button>
    </>
  );
};

export default NoteForm;
