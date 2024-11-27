import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import "../styles/rsvp.css";

const RSVP = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Yes");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "rsvps"), {
        name,
        attendance,
      });
      alert("RSVP submitted!");
      setName("");
      setAttendance("Yes");
      setIsOpen(false);
    } catch (error) {
      console.error("Error adding RSVP: ", error);
    }
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open RSVP Form</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>RSVP</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <select value={attendance} onChange={(e) => setAttendance(e.target.value)} required>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <button type="submit">Submit</button>
            </form>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVP;
