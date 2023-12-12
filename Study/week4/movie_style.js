import styled from "styled-components"
import { useState } from "react";

const wrap_div = styled.div`
    padding : 10px 150px 150px 150px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
`;

const Movie_li = styled.li`
    width : 200px;
    height : 350px;
    border: 1px solid black;
    border : none;
    overflow : hidden;
    border-radius : 0px 0px 5px 5px;
    background-color : #363a65;
    color : white;
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    justify-content: space-between;
`;

const Movie_wrap = styled.div`
    height : 300px;
`
const Content_wrap = styled.div`
    display : flex;
    padding : 10px 15px 20px 15px;
    justify-content: space-between;
`
const Title_span = styled.span`
    height : 100%;
    font-size : 12px;
`

const Rating_span = styled.span`
    height : 100%;
    font-size : 12px;
`

const post_img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const shadow_div = styled.div`
position : absolute;
width : 200px;
height : 350px;
color : white;
font-size : 12px;
border-radius : 0px 0px 5px 5px;
border : none;
background : ${(props) => props.activeindex === props.idx ? "rgba(0, 0, 0, 0.4)" : null};
`
const onclick_content = styled.div`
padding : 30px 15px 0px 15px;
visibility : ${(props) => props.activeindex === props.idx ? "visible" : "hidden"};
`;

const title_p = styled.p`

`

const overview_p = styled.p`
margin-top : 15px;
`
export default {Movie_li, wrap_div, Movie_wrap, Content_wrap, Title_span, Rating_span, post_img, shadow_div, onclick_content, overview_p};