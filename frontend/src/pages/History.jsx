import { Link } from "react-router-dom";
import Play_icon from "../images/play_icon.svg"
import About from "../images/about.webp"

import Payment from "../images/browser.png"
import Sell from "../images/phone.png"
import Wallet from "../images/1telegram.png"

import Map from "../images/map.png"
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
                             - Мероприятия
                        </p>
                    </div>
                    <div className="description">
                        <p>Программа "Way_Gulam" - это мобильное приложение, разработанное для облегчения поиска и получения информации о мероприятиях, проходящих на территории Чеченской республики и в дальнейшем за ее пределами.</p>
                    </div>

                    <div className="buttons">
                    <Link to="/history">
                        <button className="blue">
                            Мероприятия
                        </button> </Link> 
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
                    <img src={About} alt="" width="714" height="464" />
                </div>
                <div className="section">
                <div className="main_title">
                    <p>Мероприятие</p>
                </div>
                <div className="title">День интернета</div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut vel neque natus in doloribus soluta exercitationem, non rem earum, ratione dignissimos porro nesciunt dolor corporis quasi mollitia quidem sed, architecto delectus esse modi. Voluptatibus perferendis neque voluptatem quos unde, suscipit, porro cum voluptate atque, explicabo consequuntur quia temporibus error?
                </div>
                <div className="button">
                    <button>Подробнее</button>
                </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


            <div className="index_section">
                <div className="img">
                    <img src={About} alt="" width="714" height="464" />
                </div>
                <div className="section">
                <div className="main_title">
                    <p>Мероприятие</p>
                </div>
                <div className="title">День интернета</div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut vel neque natus in doloribus soluta exercitationem, non rem earum, ratione dignissimos porro nesciunt dolor corporis quasi mollitia quidem sed, architecto delectus esse modi. Voluptatibus perferendis neque voluptatem quos unde, suscipit, porro cum voluptate atque, explicabo consequuntur quia temporibus error?
                </div>
                <div className="button">
                    <button>Подробнее</button>
                </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="index_section">
                <div className="img">
                    <img src={About} alt="" width="714" height="464" />
                </div>
                <div className="section">
                <div className="main_title">
                    <p>Мероприятие</p>
                </div>
                <div className="title">День интернета</div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut vel neque natus in doloribus soluta exercitationem, non rem earum, ratione dignissimos porro nesciunt dolor corporis quasi mollitia quidem sed, architecto delectus esse modi. Voluptatibus perferendis neque voluptatem quos unde, suscipit, porro cum voluptate atque, explicabo consequuntur quia temporibus error?
                </div>
                <div className="button">
                    <button>Подробнее</button>
                </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="index_section">
                <div className="img">
                    <img src={About} alt="" width="714" height="464" />
                </div>
                <div className="section">
                <div className="main_title">
                    <p>Мероприятие</p>
                </div>
                <div className="title">День интернета</div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut vel neque natus in doloribus soluta exercitationem, non rem earum, ratione dignissimos porro nesciunt dolor corporis quasi mollitia quidem sed, architecto delectus esse modi. Voluptatibus perferendis neque voluptatem quos unde, suscipit, porro cum voluptate atque, explicabo consequuntur quia temporibus error?
                </div>
                <div className="button">
                    <button>Подробнее</button>
                </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


        </main>
        </>
    );
};

export default Index;