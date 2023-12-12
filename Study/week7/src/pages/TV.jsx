import React from "react";
import { MyMap } from "../components/MapComponent";
import { tvdata } from "../TvDummy";

function TvPage (){
    return(
        <MyMap maplist = {tvdata}/>
    );
}
export default {TvPage}
