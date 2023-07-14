import React, { useState } from 'react'

function Home() {
  let inputStyle = {
    padding: 20,
    border: "1px solid rgb(0,0,0,0.4)",
    margin: 5
  }

  let btnStyle = {
    padding: 20,
    border: "1px solid rgb(0,0,0,0.4)",
    borderRadius: 5,
    backgroundColor: "#f1f1f1",
    margin: 5
  }

  const [value, setValue] = useState(0);
  
  let incrementHandler = () => {
    setValue(value + 1);
  }
  
  let decrementHandler = () => {
    setValue(value - 1);
  }

  return (
    <div>
      <input
        style={inputStyle}
        type="number"
        placeholder="Enter any number"
        value={value}
        readOnly
      />
      <button style={btnStyle} onClick={incrementHandler}> + </button>
      <button style={btnStyle} onClick={decrementHandler}> - </button>
    </div>
  );
}

export default Home;