import React from "react";
import { Link } from "react-router-dom";
import Play_icon from "../images/play_icon.svg";
import Map from "../images/map.png";

const Index = ({ isAuthenticated }) => {
  return (
    <>
      <main>
        <div className="main">
          <div className="section1">
            <div className="title">
              <p>
                WAY
                <span className="highlighted"> GULAM </span>
                - Мой профиль
              </p>
            </div>
            <div className="description"></div>

            <div className="buttons">
              <Link to="/">
                <button className="blue">
                  Назад
                </button>{" "}
              </Link>
              <button className="transparent">
                <img src={Play_icon} alt="Play icon" />
                Редактор профиля
              </button>
            </div>
          </div>
          <div className="section2"></div>
        </div>

        <div className="section2">
          {isAuthenticated ? (
            <>
              <div className="title2">
                <Link to="/history_event">
                  <p>История мероприятий</p>
                </Link>
              </div>

              <div className="title2">
                <Link to="/">
                  <p>Выйти из аккаунта</p>
                </Link>
              </div>
            </>
          ) : (
            <p style={{"color": "white"}} >Зайдите в аккаунт или зарегистрируйтесь</p>
          )}
        </div>

        <div className="section4">
          <div className="s1">
          <div className="section2">
                 <div className="title2"><Link to="/history"><p>История мероприятий</p></Link> </div>

                 <div className="title2"><Link to="/"><p>Выйти из аккаунта</p></Link> </div>
            </div>          </div>
          <div className="s2">
            <img src={Map} alt="Map" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
