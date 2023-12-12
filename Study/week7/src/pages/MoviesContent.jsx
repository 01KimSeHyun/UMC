import { useParams} from "react-router-dom";
import { movies } from "../MovieDummy";
import styled from "../styles/moviecontent_style"

function MovieContent () {
    const params = useParams();
    const movies_data = movies.results;
    const API_URL = 'https://image.tmdb.org/t/p/original/';
    var currentkey = null;

    for(var key in movies_data){
        if(movies_data[key].title === params.productId){
            currentkey = key;
            break;
        }
    }

    console.log(movies_data[currentkey]);
    return (
        <div>
        <p>{params.productId}</p>
        <styled.poster src={API_URL + movies_data[currentkey].poster_path} alt="no image" />
        </div>
    );
}


export default {MovieContent};