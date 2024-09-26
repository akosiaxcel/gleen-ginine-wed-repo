import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const RSVP = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Yes");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "rsvps"), {
        name,
        attendance,
      });
      alert("RSVP submitted!");
    } catch (error) {
      console.error("Error adding RSVP: ", error);
    }
  };

  return (
    <div>
      <h2>RSVP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={attendance} onChange={(e) => setAttendance(e.target.value)}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RSVP;