import {React, useState} from 'react';
import AdPage from "./AdPage";


function Mytoggle () {
    const [isToggleOn, toggleHandler] = useState(true);
    
    const handleClick = () => {
        const prevState = isToggleOn;
        toggleHandler(!prevState);
    }
    return (
        <div>
        
        {isToggleOn ? null : <AdPage.ADPage/>}
        <button onClick={handleClick}>
            {isToggleOn ? '광고보기' : '광고 안보기'}
        </button>
        </div>
    );
}

export default {Mytoggle}
