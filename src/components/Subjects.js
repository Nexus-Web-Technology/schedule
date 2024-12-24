import React, { useState } from 'react';

function Subjects({ subjects, setSubjects }) {
  const [newSubject, setNewSubject] = useState('');

  const handleAddSubject = () => {
    if (newSubject.trim()) {
      setSubjects([...subjects, newSubject]);
      setNewSubject('');
    }
  };

  return (
    <div>
      <h3>Добавить дисциплину</h3>
      <input
        type="text"
        value={newSubject}
        onChange={(e) => setNewSubject(e.target.value)}
        placeholder="Введите название дисциплины"
      />
      <button onClick={handleAddSubject}>Добавить</button>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default Subjects;
