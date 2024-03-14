import React from "react";
import { useState, } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../DB/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const data = {
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };

  
  const addContact = async () => {
    try {
      await setDoc(doc(db, "Contacts", email), data);
      alert("Message Sent");
      navigate("/");

    } catch (err) {
      alert("Error sending message please try again");

    }
  };

  return (
    <div className="contactus">
      <div className="form-con">
        <div className="form">
          <h1>Contact Us</h1>
          <div className="form-main">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              
            />
            <input
              type="number"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
              
            />
          </div>
          <textarea
            placeholder="Message"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
            
          />
          <button type="submit" onClick={addContact}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
