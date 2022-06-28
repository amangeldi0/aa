// import icons
import menu from '../scr/menu.png'
import search from '../scr/lupa.png'
import basket from '../scr/basket.png'



// import tools
import '../style.scss'
import { useState} from "react";
import React from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";


const Amanfood = () => {
    const [nav, setNav] = useState(false);
    function changeState(){
        setNav(() => {
            return !nav
        })
    }

    return (
            <div className='spa'>
                <div className='header'>
                    <div className='header__container'>
                        <div><a className='header__logo'>AMAN<span>FOOD</span></a></div>
                        <nav className={(nav === false) ? 'header__navbar' : 'header__navbar__activate'}>
                            <a><Link to='/'>Home</Link></a>
                            <a><Link to='/restaurants'>Restaurants</Link></a>
                            <a><Link to='/about'>About</Link></a>
                        </nav>
                        <div className="header__icons">
                            <div id="menu"><img src={menu} onClick={changeState}/></div>
                            <div id="search-icon"><img src={search}/></div>
                            <div id="basket"><img src={basket}/> </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={ <Home/> } />
                        <Route path="about" element={ <About/> } />
                        <Route path="contact" element={ <Restaurants/> } />
                    </Routes>
                </div>

            </div>
    );
};

export default Amanfood;


const Home = () => {
    return(
        <div className='Home'>Home</div>
    )
}
const About = () => {
    return(
        <div>About</div>
    )
}
const Restaurants = () => {
    return(
        <div>Restaurants</div>
    )
}