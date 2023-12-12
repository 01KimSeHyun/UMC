import {MyMap} from "../components/MapComponent.jsx";
import movies from "../MovieDummy.js";


function MyMovie(){

    return(
        <MyMap maplist = {movies}/>
    );
}
export default {MyMovie};

