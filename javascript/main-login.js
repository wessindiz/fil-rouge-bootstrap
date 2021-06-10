
let email= document.querySelector(".form-control");
const regEmail = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
let p= document.querySelector(".error");


email.addEventListener('input',function(){
    if(!regEmail.test(email.value)){
        p.classList.remove("d-none");
        p.classList.add("d-block");
        email.classList.add("red");
    }else{
        p.classList.add("d-none");
        p.classList.remove("d-block");
        email.classList.remove("red");
    }
});