// src/components/StudentList.jsx
import React, { useContext, useState } from 'react';
import { MemberContext } from '../context/MemberContext';
import StudentDetails from './StudentDetails';
import StudentForm from './StudentForm';

const StudentList = () => {
  const { members, deleteMember } = useContext(MemberContext);
  const [editingMember, setEditingMember] = useState(null);

  return (
    <div>
      <div className="grid gap-4">
        {members.map((member) => (
          <StudentDetails
            key={member.id}
            member={member}
            onEdit={() => setEditingMember(member)}
            onDelete={() => deleteMember(member.id)}
          />
        ))}
      </div>
      {editingMember && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow">
            <StudentForm
              existingMember={editingMember}
              onClose={() => setEditingMember(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;
