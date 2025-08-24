import { useState } from 'react';
import axios from 'axios';

function EmailForm() {
  const [form, setForm] = useState({
    to: '',
    subject: '',
    text: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/email/send', form);
      alert(res.data.message);
    } catch (err) {
      alert('Failed to send email');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Send Email</h2>
      <input type="email" name="to" placeholder="To" value={form.to} onChange={handleChange} /><br />
      <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} /><br />
      <textarea name="text" placeholder="Message" value={form.text} onChange={handleChange}></textarea><br />
      <button onClick={handleSubmit}>Send Email</button>
    </div>
  );
}

export default EmailForm;
