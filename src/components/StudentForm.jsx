// src/components/StudentForm.jsx
import React, { useState, useContext } from 'react';
import { MemberContext } from '../context/MemberContext';

const StudentForm = ({ existingMember, onClose }) => {
  const { addMember, updateMember } = useContext(MemberContext);
  const [name, setName] = useState(existingMember?.name || '');
  const [age, setAge] = useState(existingMember?.age || '');
  const [email, setEmail] = useState(existingMember?.email || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const member = { id: existingMember?.id, name, age, email };
    existingMember ? updateMember(member) : addMember(member);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {existingMember ? 'Update' : 'Register'}
      </button>
    </form>
  );
};

export default StudentForm;
