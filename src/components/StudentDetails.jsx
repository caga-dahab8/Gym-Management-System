// src/components/StudentDetails.jsx
import React from 'react';

const StudentDetails = ({ member, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-gray-700">Age: {member.age}</p>
      <p className="text-gray-700">Email: {member.email}</p>
      <div className="mt-4 flex space-x-2">
        <button onClick={onEdit} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </div>
  );
};

export default StudentDetails;
