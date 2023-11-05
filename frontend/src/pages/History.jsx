import { Link } from "react-router-dom";
import Play_icon from "../images/play_icon.svg"
import Map from "../images/map.png"


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
                             - История мероприятий
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
                            <img src={Play_icon}></img>  Редактор профиля
                        </button>
                    </div>
                </div>
                <div className="section2">
                </div>
            </div>

            
            <div className="section2">
                 <div className="title2"><Link to="/history_event"><p>История мероприятий</p></Link> </div>

                 <div className="title2"><Link to="/"><p>Выйти из аккаунта</p></Link> </div>
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
        </main>
        </>
    );
};

export default Index;