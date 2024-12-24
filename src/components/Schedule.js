import React, { useState } from 'react';

function Schedule({ schedule, setSchedule, subjects, teachers, groups }) {
  const [newEntry, setNewEntry] = useState({
    subject: '',
    teacher: '',
    group: '',
    time: '',
  });

  const handleAddEntry = () => {
    if (newEntry.subject && newEntry.teacher && newEntry.group && newEntry.time) {
      setSchedule([...schedule, newEntry]);
      setNewEntry({ subject: '', teacher: '', group: '', time: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  return (
    <div>
      <h3>Добавить занятие</h3>
      <div>
        <select name="subject" value={newEntry.subject} onChange={handleChange}>
          <option value="">Выберите дисциплину</option>
          {subjects.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <select name="teacher" value={newEntry.teacher} onChange={handleChange}>
          <option value="">Выберите преподавателя</option>
          {teachers.map((teacher, index) => (
            <option key={index} value={teacher}>
              {teacher}
            </option>
          ))}
        </select>
        <select name="group" value={newEntry.group} onChange={handleChange}>
          <option value="">Выберите группу</option>
          {groups.map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </select>
        <input
          type="time"
          name="time"
          value={newEntry.time}
          onChange={handleChange}
        />
        <button onClick={handleAddEntry}>Добавить</button>
      </div>
      <ul>
        {schedule.map((entry, index) => (
          <li key={index}>
            {entry.time} - {entry.subject} ({entry.teacher}) для группы {entry.group}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;
