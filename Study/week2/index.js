var input_name = document.getElementById("input_name");
var p_name = document.getElementById("p_name");
var login_flag = [false, false, false, false, false];

input_name.oninput = (e) => {
    let current = input_name.value;
    if(current.length == 0){
        p_name.innerHTML = "필수 입력 항목입니다.";
        p_name.style.color = "tomato";
        p_name.style.visibility = "visible";
        login_flag[0] = false;
    }else{
        p_name.innerText = "멋진 이름이네요!"
        p_name.style.visibility = "visible";
        p_name.style.color = "#81c147";
        login_flag[0] = true;
        onsubmit();
    }
};
input_name.addEventListener("focusout", e => {
    let current = input_name.value;
    if(current.length == 0){
        p_name.innerText = "필수 입력 항목입니다.";
        p_name.style.color = "tomato"
        p_name.style.visibility = "visible";
        login_flag[0] = false;
    }
  });


var input_nname = document.getElementById("input_nname");
var p_nname = document.getElementById("p_nname"); 

input_nname.oninput = (e) => {
    let current = input_nname.value;
    if(current.length >= 2 && current.length <= 5){
        p_nname.innerText = "멋진 닉네임이네요!"
        p_nname.style.visibility = "visible";
        p_nname.style.color = "#81c147";
        login_flag[1] = true;
        onsubmit();
    }else{
        p_nname.innerText = "닉네임은 2-5글자로 구성해주세요!";
        p_nname.style.color = "tomato";
        p_nname.style.visibility = "visible";
        login_flag[1] = false;
    }
    console.log(current)
};

input_name.addEventListener("focusout", e => {
    let current = input_name.value;
    if(current.length == 0){
        p_name.innerText = "필수 입력 항목입니다.";
        p_name.style.color = "tomato"
        p_name.style.visibility = "visible";
        login_flag[1] = false;
    }
  });
  


var input_email = document.getElementById("input_email");
var p_email = document.getElementById("p_email");


function emailValidChk(email) {
    const email_pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if(email_pattern.test(email) === false) { return false; }
    else { return true; }
}

input_email.oninput = (e) => {
    let current = input_email.value;
    if(emailValidChk(current)){
        p_email.innerText = "올바른이메일 형식입니다.";
        p_email.style.color = "#81c147";
        p_email.style.visibility = "visible";
        login_flag[2] = true;
        onsubmit();
    }else{
        p_email.innerText = "올바른 이메일 형식으로 입력해주세요";
        p_email.style.color = "tomato";
        p_email.style.visibility = "visible";
        login_flag[2] = false;
    }
}
input_email.addEventListener("focusout", (e) => {
    let current = input_email.value;
    if(!emailValidChk(current)){
        p_email.innerText = "올바른 이메일 형식으로 입력해주세요";
        p_email.style.color = "tomato";
        p_email.style.visibility = "visible";
        login_flag[2] = false;
    }
});

var input_passwd = document.getElementById('input_passwd');
var p_passwd = document.getElementById('p_passwd');
var passwd;

function passwdValidChk(passwd){
    const passwd_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/;
    if(passwd_pattern.test(passwd) === false){  return false;   } 
    else{ return true; }
}

input_passwd.oninput = (e) => {
    let current = input_passwd.value;
    if(passwdValidChk(current) === true){
        flag = true;
        passwd = current;
        p_passwd.innerText = "안전한 비밀번호입니다!";
        p_passwd.style.color = "#81c147";
        p_passwd.style.visibility = "visible";
        login_flag[3] = true;
        onsubmit();
    }else{
        flag = false;
        p_passwd.innerText = "영어+문자+특수숫자를 조합하여 작성해주세요";
        p_passwd.style.color = "tomato";
        p_passwd.style.visibility = "visible";
        login_flag[3] = false;
    }
}
input_email.addEventListener("focusout", (e) => {
    let current = input_passwd.value;
    if(!emailValidChk(current)){
        p_passwd.innerText = "영어+문자+특수숫자를 조합하여 작성해주세요";
        p_passwd.style.color = "tomato";
        p_passwd.style.visibility = "visible";
        login_flag[3] = false;
    }
});

var input_repasswd = document.getElementById("input_repasswd");
var p_repasswd = document.getElementById('p_repasswd');
input_repasswd.oninput = (e) => {
    let current = input_repasswd.value;
    console.log(passwd, flag);
    if(current == passwd && login_flag[3] == true){
        p_repasswd.innerText = "비밀번호가 일치합니다!";
        p_repasswd.style.color = "#81c147";
        p_repasswd.style.visibility = 'visible';
        login_flag[4] = true;
        onsubmit();
    }
    else{
        p_repasswd.innerText = "비밀번호가 일치하지 않습니다.";
        p_repasswd.style.color = "tomato";
        p_repasswd.style.visibility = 'visible';
        login_flag[4] = false;
    }
}
input_repasswd.addEventListener("focusout", (e) => {
    let current = input_repasswd.value;
    if(current != passwd || login_flag[3] == false){
        p_repasswd.innerText = "비밀번호가 일치하지 않습니다.";
        p_repasswd.style.color = "tomato";
        p_repasswd.style.visibility = 'visible';
        login_flag[4] = false;
    }
})

function onsubmit(){
    var close = document.getElementById("close");
    var submit = document.getElementById("submit");
    var sub_content = document.getElementById("sub_content");
    var shadow = document.getElementById("shadow")
    if(login_flag.indexOf(false) < 0){
        submit.style.backgroundColor = "black";
        submit.onclick = () => {
            shadow.style.display = 'block';
            sub_content.style.display = 'block';
            console.log(login_flag)
        }
        close.onclick = () => {
            shadow.style.display = 'none';
            sub_content.style.display = 'none';
        }
    }
}

