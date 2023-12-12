import {React, useState} from "react";
import styled from '../styles/movie_style.js'
import { useNavigate } from 'react-router-dom';

export function MyMap (props){

        const mylist = props.maplist.results;
        const API_URL = 'https://image.tmdb.org/t/p/original/';
        const [ActiveIndex, SetActiveIndex] = useState(null);
        const navigate = useNavigate();

        const handleOnMouseEnter = (e, idx) => {
            SetActiveIndex(idx);
        }
        const handleOnMouseLeave = () => {
            SetActiveIndex(null);
        }
        
        return(
            <styled.wrap_div>
            {mylist.map((items, idx) => {
                return (
                <styled.Movie_li key={idx} onClick={() => {navigate(items.title)}} onMouseEnter={e => handleOnMouseEnter(e, idx)} onMouseLeave={e => handleOnMouseLeave(e)}>
                    <styled.Movie_wrap ><styled.post_img src={API_URL + items.poster_path}/></styled.Movie_wrap>
                    <styled.Content_wrap>
                        <div>
                        <styled.Title_span>{items.title}</styled.Title_span>
                        </div>
                        <div>
                        <styled.Rating_span>{items.vote_average}</styled.Rating_span>
                        </div>
                    </styled.Content_wrap>
                    <styled.shadow_div activeindex ={ActiveIndex} idx ={idx}>
                        <styled.onclick_content activeindex ={ActiveIndex} idx ={idx}>
                            <p>{items.title}</p>
                            <styled.overview_p>{items.overview}</styled.overview_p>
                        </styled.onclick_content>
                    </styled.shadow_div>
                </styled.Movie_li>
                );
            })
            }
            </styled.wrap_div>
        );
}



