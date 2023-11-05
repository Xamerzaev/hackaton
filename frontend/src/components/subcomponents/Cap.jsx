import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

import React, { useRef } from 'react';
import "../../css/style.css"
import Logo from "../../images/Logo.svg"

const Cap = (props) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isPopupOpen1, setPopupOpen1] = useState(false);

    const openPopup = () => {
        setPopupOpen(false)
        setPopupOpen1(false)
        setPopupOpen(true);
    }
  
    const closePopup = () => {
      setPopupOpen(false);
    }

    const openPopup1 = () => {
        closePopup()
        setPopupOpen1(true);
    }
  
    const closePopup1 = () => {
        closePopup()
        setPopupOpen(false);
    }

    
    const regemail = useRef();
    const regpass = useRef();
    // const handleSubmit = (event) => {
    //     event.preventDefault(); // Предотвращаем обновление страницы
    //     console.log('A name was submitted: ' + regemail.current.value);
    //     console.log('A name was submitted: ' + regpass.current.value);
    //     event.preventDefault();
    // }
    
    const sendRequest = (e) => {
        e.preventDefault()
        const url = "http://127.0.0.1:8000/api/v1/accounts/signup/";
        // Здесь вы должны получить значения из ваших полей, например, regemail.current.value и regpass.current.value.
        // Предположим, что вы получили эти значения корректно.
      
        const requestData = {
          email: regemail.current.value,
          password1: regpass.current.value,
          password2: regpass.current.value,
        };
      
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        };
      
        axios.post(url, requestData, { headers: headers })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
        }
    
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <p>POWERBANK 3.0</p>
                    </div>
                    
                    
                    <div className="nav">
                        <nav>
                            <li><button>О нас</button></li>
                            <li><button>Мероприятия</button></li>
                            <li><button onClick={openPopup}>Регистрация</button></li>
                            <li><button onClick={openPopup1}>Вход</button></li>
                        </nav>
                    </div>
                    
                    <div className="download">
                    <Link to="/profile">
                    <button className="blue" style={{ height: "50px" }}>
                            Профиль
                        </button> </Link> 
                      </div>

{/* __________________________________________________________________ */}
    {isPopupOpen && (
<div className="popup-overlay">
  <div className="popup">
    <h2>Форма регистрации</h2>
    <form onSubmit={sendRequest}>
      <label htmlFor="username">Почта:</label><br />
      <input type="text" id="username" name="username" ref={regemail} required />
      <br />
      <label htmlFor="password" id="pass">Пароль:</label><br />
      <input type="password" id="password" name="password" ref={regpass} required />
      <br />
      <label htmlFor="confirmPassword" id="pass">Повторите пароль:</label><br />
      <input type="password" id="confirmPassword" name="confirmPassword" required />
      <br />
      <div className="buttons">
        <button type="submit" id="zareg">Зарегистрироваться</button>
        <button className="close-button" onClick={closePopup}>Закрыть</button>
      </div>
    </form>
  </div>
</div>
        )}
{/* __________________________________________________________________ */}


{/* __________________________________ВХОД_______________________________ */}
{isPopupOpen1 && (
            <div className="popup-overlay">
                <div className="popup">
                    <h2>Форма для входа</h2>
                    <form onSubmit={sendRequest}>
                    {/* Ваши поля для регистрации здесь */}
                    <label htmlFor="username">Почта:</label><br />
                    <input type="text" id="username" name="username" ref={regemail} required />
                    <br />
                    <label htmlFor="password" id="pass">Пароль:</label><br />
                    <input type="password" id="password" name="password" ref={regpass} required />
                    <br />
                    <div className="buttons">
                        <button type="submit" id="zareg" onClick={sendRequest}>Войти</button>
                        <button className="close-button" onClick={closePopup1}>Закрыть</button>
                    </div>
                    </form>
                </div>
            </div>
        )}
{/* __________________________________________________________________ */}

                </div>
            </header>
        </>
    );
};

export default Cap;