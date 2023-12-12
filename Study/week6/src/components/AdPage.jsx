import React from "react";
import Adimage from "../images/Untitled.svg";

class ADPage extends React.Component {
	
    render(){
        return (
            <img
            style={{ width: "100vw", height: "300px", objectFit: "cover" }}
            src={Adimage}
            alt="로고"/>
        );
    }
}
export default {ADPage}