import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Subjects from './components/Subjects';
import Teachers from './components/Teachers';
import Groups from './components/Groups';
import Schedule from './components/Schedule';
import ScheduleView from './components/ScheduleView'; // Компонент для просмотра расписания

function App() {
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [schedule, setSchedule] = useState([]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Управление расписанием</h1>
          <nav>
            <Link to="/">Просмотр расписания</Link> |{' '}
            <Link to="/edit">Редактирование расписания</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<ScheduleView schedule={schedule} />}
            />
            <Route
              path="/edit"
              element={
                <div>
                  <section>
                    <h2>Дисциплины</h2>
                    <Subjects subjects={subjects} setSubjects={setSubjects} />
                  </section>
                  <section>
                    <h2>Преподаватели</h2>
                    <Teachers teachers={teachers} setTeachers={setTeachers} />
                  </section>
                  <section>
                    <h2>Учебные группы</h2>
                    <Groups groups={groups} setGroups={setGroups} />
                  </section>
                  <section>
                    <h2>Редактирование расписания</h2>
                    <Schedule
                      schedule={schedule}
                      setSchedule={setSchedule}
                      subjects={subjects}
                      teachers={teachers}
                      groups={groups}
                    />
                  </section>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
