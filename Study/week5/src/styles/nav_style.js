import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav_div = styled.div`
    width : 100vw;
    padding : 10px 0px 10px 200px;
    display: flex;
    background-color : #032541;
`
const Nav_ul = styled.div`
    width : 200px;
    padding : 3px 0px 3px 30px;
    display : flex;
    justify-content: space-around;
`
const Menu_li = styled.li`
    color : white;
`
const StyleLink = styled(Link)`
    color : white;
    text-decoration : none;
`

const btn = styled.button`
    margin-left : 15px;
    width : 80px;
    height : 20px;
    border-radius : 15px 15px 15px 15px;
    border : none;
    float : left;
`

const login_message = styled.div`
color : white;
padding : 3px 0px 3px 10px;
float : left;
`
const login_wrap = styled.div`
width : 300px;
`

export default {Nav_div, Nav_ul, Menu_li, StyleLink, btn, login_message, login_wrap};