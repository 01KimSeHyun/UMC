import styled from "styled-components";

const Login_wrapdiv = styled.div`
width : 500px;
height : 700px;
padding : 20px 50px 50px 20px;
`;
const Login_message = styled.h1`
font-size : 20px;
font-weight : bold;
`
const Login_inputType = styled.span`
font-size : 10px;
`
const Login_input = styled.input`
width : 600px;
height : 30px;
padding : 5px 10px 5px 10px;
border : 1px solid gray;
border-radius : 5px 5px 5px 5px;
`
const Login_submit = styled.input`
color : white;
width : 600px;
height : 50px;
border : none;
border-radius : 30px 30px 30px 30px;
background-color : ${(props) => props.logstate === true ? "#032641" : null}
`
const Email_wrap = styled.div`
padding : 10px 0 0 0;
`
const Password_wrap = styled.div`
padding : 10px 0 0 0;
`;
const Email_valid = styled.span`
    color : ${(props) => props.$isvalid === true ? null : "red"};
    font-size : 10px
`

export default {Login_input, Login_inputType, Login_message, Login_submit, Login_wrapdiv, Email_wrap, Password_wrap, Email_valid}