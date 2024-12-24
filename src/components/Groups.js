import React, { useState } from 'react';

function Groups({ groups, setGroups }) {
  const [newGroup, setNewGroup] = useState('');

  const handleAddGroup = () => {
    if (newGroup.trim()) {
      setGroups([...groups, newGroup]);
      setNewGroup('');
    }
  };

  return (
    <div>
      <h3>Добавить учебную группу</h3>
      <input
        type="text"
        value={newGroup}
        onChange={(e) => setNewGroup(e.target.value)}
        placeholder="Введите название группы"
      />
      <button onClick={handleAddGroup}>Добавить</button>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>{group}</li>
        ))}
      </ul>
    </div>
  );
}

export default Groups;
