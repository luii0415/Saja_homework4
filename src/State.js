import React, { useState } from "react";

const StateComponent = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>State Component</h2>
      <input type="text" value={text} onChange={handleChange} />
      <p>입력된 텍스트: {text}</p>
    </div>
  );
};

export default StateComponent;
