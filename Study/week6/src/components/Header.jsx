import nav_style from "../styles/nav_style";
import { Link } from 'react-router-dom';
import LoginControl from "./LoginControl";

function Nav(){
    
    return (
        <nav_style.Nav_div>
        <div>
        <Link to={'/'}>
        <img
		style={{ width: "154px", height: "20px" }}
		src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		alt="로고"/>
        </Link>
        </div>
        <nav_style.Nav_ul>
            <nav_style.Menu_li><nav_style.StyleLink to={'/Movie'}>영화</nav_style.StyleLink></nav_style.Menu_li>
            <nav_style.Menu_li><nav_style.StyleLink to={'/Tv'}>TV 프로그램</nav_style.StyleLink></nav_style.Menu_li>
            <nav_style.Menu_li><nav_style.StyleLink to={'/Celebrity'}>인물</nav_style.StyleLink></nav_style.Menu_li>
        </nav_style.Nav_ul>
            <LoginControl.LoginControl/>
        </nav_style.Nav_div>
    );
}

export default {Nav};