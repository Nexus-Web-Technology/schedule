import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Subjects from './components/Subjects';
import Teachers from './components/Teachers';
import Groups from './components/Groups';
import Schedule from './components/Schedule';
import ScheduleView from './components/ScheduleView';
import logo from './surgu.png';

function App() {
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [schedule, setSchedule] = useState([]);

  return (
    <Router>
      <div className="App">
        <header className="top-bar">
          <a href="https://lms.surgu.ru/my/courses.php" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Логотип СурГУ" className="logo" />
          </a>
          <nav>
            <Link to="https://lms.surgu.ru/?redirect=0" className="nav-button">Главная страница</Link>
            <Link to="https://lms.surgu.ru/my/" className="nav-button">Личный кабинет</Link>
            <Link to="https://lms.surgu.ru/my/courses.php" className="nav-button">Мои курсы</Link>
            <Link to="/" className="nav-button">Просмотр расписания</Link>
            <Link to="/edit" className="nav-button">Управление расписанием</Link>
          </nav>
        </header>
        <div className="main-content">
          <div className="container">
            <h1>Расписание</h1>
            <div className="schedule-panel">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div>
                      <h2>Текущее расписание</h2>
                      <hr />
                      <ScheduleView schedule={schedule} />
                    </div>
                  }
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
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;