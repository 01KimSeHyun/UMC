import { useEffect, useState } from "react";
import styled from "../styles/login_style";

function LoginPage() {
    
    const [form, setform] = useState({
        email : "",
        password : ""
    })
    const [isValid, setValid] = useState({
        email_valid : false,
        password_valid : false,
        log_state : false
    });

    useEffect(() => {
        var email_exp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        var password_exp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

        if(email_exp.test(form.email)){
           setValid({
            ...isValid, email_valid : true
           })
        }
        if(password_exp.test(form.password)){
            setValid({
                ...isValid, password_valid : true
            })
        }
        if(isValid.email_valid){
            if(isValid.password_valid){
                setValid({
                    ...isValid, log_state : true
                });
            }
        }
        
    }, [form.email, form.password])
    const SetBtnColor = () => {
        return isValid.log_state ? "#032641" : null;
    }

    return(
        <styled.Login_wrapdiv>
            <styled.Login_message>
                이메일과 비밀번호를 입력해주세요
            </styled.Login_message>
            <form>
                <styled.Email_wrap>
                    <div><styled.Login_inputType>이메일 주소</styled.Login_inputType></div>
                    <styled.Login_input type="id" value={form.email} onChange={e => setform({
                        ...form, email : e.target.value
                    })}/>
                    <div><styled.Email_valid isvalid = {isValid.email_valid}>{isValid.email_valid ? "" : "올바른 이메일 주소를 입력해주세요."}</styled.Email_valid></div>
                </styled.Email_wrap>
                <styled.Password_wrap>
                    <div><styled.Login_inputType>비밀번호</styled.Login_inputType></div>
                    <styled.Login_input type="password" placeholder="영문 숫자 특수문자 포함 8자 이상 15자 이하" value={form.password} onChange={e => setform({...form, password:e.target.value})}></styled.Login_input>
                </styled.Password_wrap>
                <div>
                    <styled.Login_submit logstate = {isValid.log_state} type="submit" value={"확인"}/>
                </div>
            </form>
        </styled.Login_wrapdiv>
    );
}

export default {LoginPage};