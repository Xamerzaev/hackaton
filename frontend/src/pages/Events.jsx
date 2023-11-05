import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Play_icon from "../images/play_icon.svg"
import axios from "axios";

const Index = () => {
    // Состояние для хранения мероприятий
    const [events, setEvents] = useState([]);
  
    // Функция для выполнения запроса к Django API и установки данных в состояние
    const fetchEvents = () => {
      // URL вашего Django API
      const apiUrl = "http://127.0.0.1:8000/api/v1/events/";
  
      // Заголовки для запроса
      const headers = {
        "accept": "application/json",
        "X-CSRFToken": "Gz5NFv290jCigFfzD64O9h9IO9PY1KBpUDlEu1ahHnNN2UHrivvJODp7EkLe8rcy"
      };
  
      // Выполнить GET-запрос к API
      axios.get(apiUrl, { headers })
        .then(response => {
          if (response.status === 200) {
            setEvents(response.data.results);
          } else {
            console.error("Произошла ошибка при запросе данных.");
          }
        })
        .catch(error => {
          console.error("Произошла ошибка при выполнении запроса:", error);
        });
    };
  
    // Используйте useEffect, чтобы выполнить запрос при загрузке компонента
    useEffect(() => {
      fetchEvents();
    }, []);

    return (
        <>
        <main>
            <div className="main">
                <div className="section1">    
                    <div className="title">
                        <p>
                            Мероприятия
                            <span className="highlighted"> доступны сейчас </span>
                        </p>
                    </div>
                    <div className="description">
                    </div>

                    <div className="buttons">
                    <Link to="/">
                        <button className="blue">
                            Назад
                        </button> </Link> 
                        <button className="transparent">
                            <img src={Play_icon}></img>  Фильтры
                        </button>
                    </div>
                </div>
                <div className="section2">
                </div>
            </div>

                    <div className="section3">
                {events.length > 0 ? (
                events.map(event => (
                    <div className="column" key={event.id}>
                    <div className="icon">
                        <img src={event.image} alt={event.name} />
                    </div>
                    <div className="title">
                        <p>{event.name}</p>
                    </div>
                    <div className="desc">
                        <p>{event.description}</p>
                    </div>
                    </div>
                ))
                ) : (
                <p>Пока мероприятий нет.</p>
                )}
            </div>
        </main>
        </>
    );
};

export default Index;