import React, { useState } from 'react';
import './EstimateRequest.css';  // We'll add some basic styling later

function EstimateRequest() {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send the form data to a server or API
    console.log('Form data submitted:', formData);
    alert('Request submitted!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      zip: '',
      message: ''
    });
  };

  return (
    <div className="estimate-request">
      <h2>REQUEST YOUR</h2>
      <h1>FREE ESTIMATE</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Zip Code *</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send Request</button>
      </form>
    </div>
  );
}

export default EstimateRequest;