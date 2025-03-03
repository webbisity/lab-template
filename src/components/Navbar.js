import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeContext';

import '../CSS/Navbar.css';
import DarkMode from '../assets/DarkMode';
import LightMode from '../assets/LightMode';

const Navbar = () => {

    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const darkModeSwitch = () => {
        if (darkMode === true) {
            setDarkMode(false);
            document.cookie = "false"
        } else {
            setDarkMode(true);
            document.cookie = "true";
        }
    }
    return (
        <div className={`${darkMode ? "navbar navbarDark" : "navbar"}`}>
            <div className='logoNname'>
                <div className="mainLogo"><Link to="/home"><img src="https://lh3.googleusercontent.com/pw/AIL4fc8x8n1vKAjGs6h_kFGzmwPF5b9eGTPIrASNiHrkH3pAl8I2Zk0q9kFUaE82WAeSyQGUXYDBe5DRqw6hV5D5Em0VPZo18_i8O1zsbKW9a4SzCTBpUNHJRFhg8Gm3THwVREJVl-vPTQRCvBAdrYi_V4Zx=w423-h423-s-no?authuser=0" alt="1" /></Link></div>
                <span>Insect Lab@TAU</span>
            </div>
            <div className="links">
                <NavLink to={"/"}><span>Home</span></NavLink>
                <NavLink to={"/research"}><span>Research</span></NavLink>
                <NavLink to={"/publications"}><span>Publications</span></NavLink>
                <NavLink to={"/members"}><span>Lab members</span></NavLink>
                <NavLink to={"/contact"}><span>Contact</span></NavLink>
                {/* <NavLink to={"/positions"}><span>Open posiotions</span></NavLink> */}
            </div>                
            <div className="logo"><Link to="https://en-lifesci.tau.ac.il/" target='_blank'><img src='https://www.aftau.org/wp-content/uploads/2020/07/Wise.png' alt=''></img></Link></div>
            <div className='darkModeSwitch' onClick={darkModeSwitch}>
                <span>{darkMode ? <LightMode color={"white"}/> : <DarkMode color={"black"}/>}</span>
            </div>
        </div>
    )
}

export default Navbar;