import React, { useState } from 'react';
import { GoMailRead } from 'react-icons/go';
import { toast } from 'react-toastify';
import { isEmail, isInt } from 'validator';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { Center } from './styled';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = false;

    if (name.length < 3 || name.length > 255) {
      errors = true;
      toast.error('Send a name between 3 to 255 characters');
    }

    if (!isEmail(email)) {
      errors = true;
      toast.error('Invalid email.');
    }

    if (!isInt(String(telephone))) {
      errors = true;
      toast.error('Invalid telephone');
    }

    if (message.length < 3 || message.length > 255) {
      errors = true;
      toast.error('Send a message between 10 to 255 characters');
    }
    if (errors) return;

    dispatch(actions.contactRequest({ name, email, telephone, message }));
  };
  return (
    <Center>
      <div className="item1">
        <img src="/woman.jpg" alt="photos" />
        <div className="box" />
      </div>

      <div className="item2">
        <div className="title">
          <GoMailRead className="titleIcons" size={30} />
          <div>
            <p>GET IN</p>
            <strong>TOUCH</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <p className="items1">
            Your name <br />
            <input
              type="text"
              name="texts"
              placeholder="type your name here..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p className="items2">
            Email* <br />
            <input
              type="text"
              name="emails"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p className="items3">
            Telephone* <br />
            <input
              type="text"
              name="phone"
              placeholder="(  ) ____-____"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </p>
          <p className="items4">
            Message*
            <br />
            <textarea
              placeholder="Type what you want to say to us"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </p>
          <button className="btn" type="submit">
            SEND NOW
          </button>
        </form>
      </div>
    </Center>
  );
}
