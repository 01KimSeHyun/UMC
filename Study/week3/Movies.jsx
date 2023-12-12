import {React, useState} from "react";
import movies from '../MovieDummy.js';
import styled from '../styles/movie_style.js'

function MyMovie (){
    
        const mylist = movies.results;
        const API_URL = 'https://image.tmdb.org/t/p/original/';
        const [ActiveIndex, SetActiveIndex] = useState(null);

        const handleOnMouseEnter = (e, idx) => {
            SetActiveIndex(idx);
            console.log(ActiveIndex);
        }
        const handleOnMouseLeave = () => {
            SetActiveIndex(null);
            console.log(ActiveIndex)
        }
       
        return(
            <styled.wrap_div>
            {mylist.map((items, idx) => {
                return (
                <styled.Movie_li key={idx} onMouseEnter={e => handleOnMouseEnter(e, idx)} onMouseLeave={e => handleOnMouseLeave(e)}>
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
                </styled.Movie_li>);
            })
            }
            </styled.wrap_div>
        );
    }
export default { MyMovie };
