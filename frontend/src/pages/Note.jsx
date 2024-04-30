// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const response = await api.get("/api/notes/");
      setNotes(response.data);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await api.delete(`/api/notes/delete/${id}/`);
      alert("Note deleted!");
      getNotes();
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  const createNote = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/notes/", { content, title });
      alert("Note created!");
      getNotes();
    } catch (error) {
      console.error("Failed to create note:", error);
    }
  };

  const handleLogout = () => {
    console.log("Logout button clicked");
    localStorage.clear();
    navigate("/logout");

  };


  return (
    <div>
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>
      <h2>Create a Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>

      <button onClick={handleLogout}>Logout</button>

    </div>
  );
}

export default Home;
