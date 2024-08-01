import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  const sendMessage = () => {
    const formattedNumber = number.replace(/\D/g, ''); // Remove non-digit characters
    const currentTime = new Date();
    const targetTime = new Date();

    targetTime.setHours(parseInt(hour, 10));
    targetTime.setMinutes(parseInt(minute, 10));
    targetTime.setSeconds(0);

    const delay = targetTime - currentTime;

    if (delay > 0) {
      setTimeout(() => {
        const url = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url; // Use window.location.href to open in the same tab
      }, delay);
    } else {
      alert("Scheduled time must be in the future.");
    }
  };

  return (
    <div className="App" style={{display:'flex',flexDirection:'column',margin:'10px',height:'700px',background:'black',justifyContent:"center"}}>
      <h1 style={{textAlign:'center',color:'white'}}>WhatsApp Message Sender</h1>
      <input style={{height:'30px',margin:'20px'}}
        type="text"
        placeholder="Phone Number (with country code)"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input style={{height:'30px',margin:'20px'}}
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input style={{height:'30px',margin:'20px'}}
        type="number"
        placeholder="Hour (24-hour format)"
        value={hour}
        onChange={(e) => setHour(e.target.value)}
      />
      <input style={{height:'30px',margin:'20px'}}
        type="number"
        placeholder="Minute"
        value={minute}
        onChange={(e) => setMinute(e.target.value)}
      />
      <button onClick={sendMessage} style={{height:'40px',margin:'20px'}}>Send Message</button>
    </div>
  );
}

export default App;
