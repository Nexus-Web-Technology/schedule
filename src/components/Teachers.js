import React, { useState } from 'react';

function Teachers({ teachers, setTeachers }) {
  const [newTeacher, setNewTeacher] = useState('');

  const handleAddTeacher = () => {
    if (newTeacher.trim()) {
      setTeachers([...teachers, newTeacher]);
      setNewTeacher('');
    }
  };

  return (
    <div>
      <h3>Добавить преподавателя</h3>
      <input
        type="text"
        value={newTeacher}
        onChange={(e) => setNewTeacher(e.target.value)}
        placeholder="Введите имя преподавателя"
      />
      <button onClick={handleAddTeacher}>Добавить</button>
      <ul>
        {teachers.map((teacher, index) => (
          <li key={index}>{teacher}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teachers;
