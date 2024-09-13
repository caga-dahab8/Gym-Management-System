// src/pages/ViewStudents.jsx
import React, { useEffect, useContext } from 'react';
import StudentList from '../components/StudentList';
import { MemberContext } from '../context/MemberContext';
import { fetchMembers } from '../mockApi';

const ViewStudents = () => {
  const { members, setMembers } = useContext(MemberContext);

  useEffect(() => {
    fetchMembers().then((data) => setMembers(data));
  }, [setMembers]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">View Registered Members</h2>
      <StudentList />
    </div>
  );
};

export default ViewStudents;
