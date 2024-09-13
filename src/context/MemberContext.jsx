// src/context/MemberContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { fetchMembers } from '../mockApi';

export const MemberContext = createContext();

const MemberProvider = ({ children }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers().then((data) => setMembers(data));
  }, []);

  const addMember = (member) => {
    setMembers([...members, { ...member, id: members.length + 1 }]);
  };

  const updateMember = (updatedMember) => {
    setMembers(members.map(member => 
      member.id === updatedMember.id ? updatedMember : member
    ));
  };

  const deleteMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  return (
    <MemberContext.Provider value={{ members, addMember, updateMember, deleteMember }}>
      {children}
    </MemberContext.Provider>
  );
};

export { MemberProvider };
