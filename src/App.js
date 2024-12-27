import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Schedule from './components/Schedule';
import ScheduleView from './components/ScheduleView';
import logo from './surgu.png';

function App() {
  const initialGroups = ['607-42', '607-41'];
  const initialTeachers = ['Назин Антон Герогиевич', 'Кокорин Михаил Андреевич', 'Лысенкова Светлана Александровна', 'Назина Нина Борисовна', 'Пешков Андрей Александрович', 'Андриенко Анастасия Ивановна', 'Савантеева Кристина Владимировна'];
  const initialSubjects = ['Математический анализ', 'Web-программирование', 'Программирование', 'Базы данных', 'История России', 'Информатика', 'Введение в проф. деятельность', 'Основы Российской Государственности'];
  const initialTimes = [
    '8:30-9:50 (1 пара)',
    '10:00-11:20 (2 пара)',
    '11:30-12:50 (3 пара)',
    '13:20-14:50 (4 пара)',
  ];

  const [schedule, setSchedule] = useState([]);

  return (
    <Router>
      <div className="App">
        <header className="top-bar">
          <a href="https://lms.surgu.ru/my/courses.php" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Логотип СурГУ" className="logo" />
          </a>
          <nav>
            <Link to="https://www.surgu.ru" className="nav-button">Главная страница</Link>
            <Link to="https://lms.surgu.ru/my/" className="nav-button">Личный кабинет</Link>
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
                  <Schedule
                    schedule={schedule}
                    setSchedule={setSchedule}
                    subjects={initialSubjects}
                    teachers={initialTeachers}
                    groups={initialGroups}
                    times={initialTimes}
                  />
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