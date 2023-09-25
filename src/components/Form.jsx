"use client"

import React, { useState } from "react";
import emailjs from 'emailjs-com'

const EmailComponent = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendEmail = () => {

    const templateParams = {
      name: email,
      notes: message
    };

    // Los argumentos dados a la funcion emailjs.send corresponden al id del servicio, id del template, data, id de la api, esta informacion es brindada en la plataforma de emailjs en su pagina web.
    emailjs.send('service_qd9n5nm', 'template_5mucmid', templateParams, 'gLKPFV2QBCSnfbzFH')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div>
      <input name="mail" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea name="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendEmail}>Send</button>
    </div>
  );
};

export default EmailComponent;

