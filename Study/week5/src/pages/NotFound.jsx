import { useNavigate } from "react-router-dom";
import styled from "styled-components";



function NotFound () {
    const Notfound_wrap = styled.div`
        padding : 50px 200px 50px 200px;
    `;
    const Notfound_h1 = styled.h1`
        font-size : 30px;
        font-weight : bold;
    `;
    const Notfound_h3 = styled.h3`
        padding : 20px 0 20px 0;
        font-size : 20px;
    `;
    const Notfound_Link = styled.h3`
        color : tomato;
        font_size : 20px;
        text-decoration : none;
        cursor:pointer;
    `;
    const navigate = useNavigate();
    
    return (
        <Notfound_wrap>
            <Notfound_h1>해당 페이지를 찾을 수 없습니다</Notfound_h1>
            <Notfound_h3>주소가 잘못되었거나 더 이상 제공하지 않는 페이지입니다.</Notfound_h3>
            <Notfound_Link onClick={() => {navigate("/")}}>메인페이지로 이동</Notfound_Link>
        </Notfound_wrap>
    );

}

export default {NotFound}