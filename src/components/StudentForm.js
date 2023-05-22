import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../store/actions/studentActions';

const StudentForm = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [gpa, setGpa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      firstName,
      lastName,
      email,
      imageUrl,
      gpa,
    };
    dispatch(addStudent(newStudent));
    // Clear form inputs
    setFirstName('');
    setLastName('');
    setEmail('');
    setImageUrl('');
    setGpa('');
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div>
          <label htmlFor="gpa">GPA:</label>
          <input type="text" id="gpa" value={gpa} onChange={(e) => setGpa(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
