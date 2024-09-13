// src/pages/Register.jsx
import React from 'react';
import StudentForm from '../components/StudentForm';

const Register = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Register a New Member</h2>
      <StudentForm />
    </div>
  );
};

export default Register;
