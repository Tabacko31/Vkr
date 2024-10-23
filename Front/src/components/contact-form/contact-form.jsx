
import { useState } from 'react';

import {Button} from '../button/button'
import './contact.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='contact-form'>
        <div className="contact-form-title">
          Свяжитесь с нами
        </div>
        <label className='contact-form-label' htmlFor="fullName">Полное имя:</label>
        <input
          className='contact-form-input'
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      <label className='contact-form-label' htmlFor="phoneNumber">Номер телефона:</label>
      <input
      className='contact-form-input'
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <label className='contact-form-label' htmlFor="email">Почта:</label>
      <input
      className='contact-form-input'
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label className='contact-form-label' htmlFor="message">Сообщение:</label>
      <textarea
       className='contact-form-input message-textearea'
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <Button name='Отправить'/>
      </div>
    </form>
  );
};

export default ContactForm;
