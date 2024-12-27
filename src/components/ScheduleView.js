import React from 'react';

function ScheduleView({ schedule }) {
  return (
    <div>
      {schedule.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>Расписание пока пусто. Перейдите на страницу "Редактирование", чтобы добавить занятия.</p>
      ) : (
        <ul>
          {schedule.map((entry, index) => (
            <li key={index}>
              <strong>{entry.time}</strong> — {entry.subject} 
              <br />
              <em>{entry.teacher}</em>, группа: <span>{entry.group}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ScheduleView;
