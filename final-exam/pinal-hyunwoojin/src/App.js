import React, { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    alert(message);
    setMessage("");
  };

  return (
    <div>
      <h1>Practice Event</h1>
      <input
        type="text"
        name="message"
        placeholder="Give me something"
        value={message}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Confirm</button>
    </div>
  );
};

export default EventPractice;
