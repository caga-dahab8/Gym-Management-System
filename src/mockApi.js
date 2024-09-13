// src/mockApi.js
const mockMembers = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
  ];
  
  export const fetchMembers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockMembers);
      }, 1000);
    });
  };
  