import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Play_icon from "../images/play_icon.svg"
import Graphic from "../images/graphic.jpg"

import Payment from "../images/browser.png"
import Sell from "../images/phone.png"
import Wallet from "../images/1telegram.png"

import Map from "../images/map.png"
import Planet from "../images/planet.png"
import Telegram2 from "../images/telegram2.png"

import Phone1 from "../images/phones/1.png"
import Phone2 from "../images/phones/2.png"
import Phone3 from "../images/phones/3.png"
import Phone4 from "../images/phones/4.png"
import I12 from "../images/12.png"


const Index = () => {
    return (
        <>
        <main>
            <div className="main">
                <div className="section1">    
                    <div className="title">
                        <p>
                            WAY
                            <span className="highlighted"> GULAM </span>
                             - Мероприятия в ЧР
                        </p>
                    </div>
                    <div className="description">
                        <p>Программа "Way_Gulam" - это мобильное приложение, разработанное для облегчения поиска и получения информации о мероприятиях, проходящих на территории Чеченской республики и в дальнейшем за ее пределами.</p>
                    </div>

                    <div className="buttons">
                        <button className="blue">
                            Мероприятия
                        </button>
                        <button className="transparent">
                            <img src={Play_icon}></img>  Навигатор
                        </button>
                    </div>
                </div>
                <div className="section2">
                </div>
            </div>


            <div className="index_section">
                <div className="img">
                    <img src={Graphic} alt="" />
                </div>
                <div className="section">
                    <div className="main_title">
                        <p>О нас</p>
                    </div>
                    <div className="title">Accelerate the world’s transition</div>
                    <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.</div>
                    <div className="button">
                        <button>More About Us</button>
                    </div>
                </div>
            </div>

            
            <div className="section2">
                <div className="title1"><p>Наши преимущества</p></div>
                <div className="title2"><p>Безопасность, уникальность, удобство</p></div>
                <div className="title3"><p>Мобильное приложение "Way_Gulam" - лучший источник информации о мероприятиях в Чеченской республике и за ее пределами благодаря широкому охвату событий, актуальности данных и пользовательской дружелюбности.</p></div>
            </div>


            <div className="section3">
                <div className="column">
                    <div className="icon">
                        <img src={Wallet}></img>
                    </div>
                    <div className="title">
                        <p>Web-сайт</p>
                    </div>
                    <div className="desc">
                        <p> Официальный веб-ресурс с полной информацией о наших мероприятиях и услугах.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="icon">
                        <img src={Payment}></img>
                    </div>
                    <div className="title">
                        <p>Моб.приложение</p>
                    </div>
                    <div className="desc">
                        <p>Удобное приложение для мобильных устройств, позволяющее быстро найти мероприятия и участвовать в них.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="icon">
                        <img src={Sell}></img>
                    </div>
                    <div className="title">
                        <p>Telegram бот</p>
                    </div>
                    <div className="desc">
                        <p>Интерактивный бот для Телеграм, предоставляющий информацию о мероприятиях и возможность связи с нами.</p>
                    </div>
                </div>
            </div>


            <div className="section7">
  <div className="desc">
    <p>Play Market | Appstore</p>
  </div>
  <div className="title">
    <p>Вы можете скачать наше приложение ниже</p>
  </div>
  <div className="images">
    <img src={Phone1} alt="Phone Color 1" />
    <img src={Phone2} alt="Phone Color 2" />
    <img src={Phone3} alt="Phone Color 3" />
    <img src={Phone4} alt="Phone Color 4" className="separate-phone" />
  </div>

  <div className="button">
    <img src={I12} alt="12" className="sct7img" />

  </div>
</div>


            <div className="section4">
                <div className="s1">
                    <div className="t1">
                        <p>Our vision</p>
                    </div>
                    <div className="t2">
                        <p>Users from all over the world</p>
                    </div>
                    <div className="t3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.</p>
                    </div>
                    <div className="t4">
                        <div className="c">
                            <p className="mains">32K+</p>
                            <p>People Joined</p>
                        </div>
                        <div className="c">
                            <p className="mains">250+</p>
                            <p>Vip Users</p>
                        </div>
                        <div className="c">
                            <p className="mains">87+</p>
                            <p>Big Company</p>
                        </div>
                    </div>
                </div>
                <div className="s2">
                    <img src={Map} alt="" />
                </div>
            </div>


            <div className="section5">
                <div className="img">
                    <img src={Telegram2} alt="" />
                </div>
                <div className="container21">
                    <div className="small_title">
                        <p>Новые мероприятия</p>
                    </div>
                    <div className="title">
                        <p>Подпишитесь на нашу рассылку</p>
                    </div>
                    <div className="desc"><p>Специализированный телеграм бот для Вашего удобства. Все что Вам нужно сделать, это - запустить наш бот. Так он будет присылать Вам новые мероприятия моментально!</p></div>
                    <div className="input">
                    <a href="https://t.me/way_gulam_bot" target="blank"><button>Подписаться</button></a>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
};

export default Index;