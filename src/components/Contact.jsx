import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    order: '',
    category: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://e-commerce-website-project.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(data.message); 
        setFormData({
          name: '',
          email: '',
          phone: '',
          order: '',
          category: '',
          query: '',
        });
      } else {
        alert('Failed to send the query.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div 
        className="banner" 
      >
        <h1>
          NEED HELP !!!
        </h1>
        <p style={{ textDecoration: 'underline', textAlign: 'center' }}>
          Contact Us
        </p>
      </div>
      <div className='query-container'>
        <div 
          className="query" 
        >
          <div className="query-form">
            <form 
              onSubmit={handleSubmit} 
            >
              <div className='qbox'>
              <label htmlFor="name">Name
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Enter Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  style={{ height: '3rem' }} 
                />
              </label>

              <label htmlFor="mail">Email id
                <input 
                  type="email" 
                  name="email" 
                  id="mail" 
                  placeholder="Enter Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  style={{ height: '3rem' }} 
                />
              </label>

              <label htmlFor="phone">Phone Number
                <input 
                  type="number" 
                  name="phone" 
                  id="phone" 
                  placeholder="Enter Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  style={{ height: '3rem' }} 
                />
              </label>

              <label htmlFor="order">Order
                <input 
                  type="text" 
                  name="order" 
                  id="order" 
                  placeholder="Order Number" 
                  value={formData.order}
                  onChange={handleChange}
                  required 
                  autoComplete="off"  
                />
              </label>

              <label htmlFor="category">Category
                <input 
                  type="text" 
                  name="category" 
                  placeholder="Enter category" 
                  value={formData.category}
                  onChange={handleChange}
                  required 
                  autoComplete="off" 
                  style={{ height: '3rem', borderRadius: '8px' }} 
                />
              </label>
              </div>
              <label htmlFor="message">Query Details
                <textarea 
                  placeholder="Enter Your Query" 
                  id="message" 
                  name="query" 
                  value={formData.query}
                  onChange={handleChange}
                />
              </label>

              <input type="submit" className="qbtn" />
            </form>
          </div>
        </div>
      </div>
      <div className='q-details'>
        <h3 style={{ fontWeight: '400' }}> For Customer Support & Queries:</h3>
        <p>Call us at Customer Care no. : 1800-000-1111</p>
        <p>Email us at kr@gmail.com</p>
        <p>(Operational Timings: 08:00AM to 10:00PM)</p>
      </div>
    </>
  );
};

export default Contact;
