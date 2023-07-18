import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

function Contact() {
  const params = useParams()
  console.log(params.id)

  const navigation = useNavigate();

  return (
    <div className='contact'>
      <button onClick={() => navigation("/user")}>This is Navigation button</button>
    </div>
  )
}

export default Contact;