let userName = document.querySelector('.nameinput')
let email = document.querySelector('.email');
let number = document.querySelector('.number');
let password = document.querySelector('.password');
let password2 = document.querySelector('.password2');
let form = document.querySelector('.form')







userName.addEventListener('keyup', (e) => {
    let userNameValue = userName.value.trim().toLowerCase()
    let boxText1 = document.querySelector('.nametext')

    try{
        if(userNameValue.match(/[a-z]/) !=null && userNameValue!= "" && userNameValue.match(/[0-9]/) ==null) {
            userName.classList.add('green__border')
            userName.classList.remove('red__border')
            boxText1.style.color ="green"
            throw "Succes"
        }
        else {
            userName.classList.add('red__border')
            userName.classList.remove('green__border')
            boxText1.style.color ="red"
            throw "Error: Usernme cannot be blank"
        }
    }catch(e) {
        boxText1.innerHTML =e
    }
})

email.addEventListener('keyup', (e) => {
    let boxText2 = document.querySelector('.box__text2')
    let emailValue = email.value.trim()
try {
        if(emailValue.includes("@gmail.")  && emailValue !="" || emailValue.match(/[0-9]/) !=null ) {
            email.classList.add('green__border')
            email.classList.remove('red__border')
            boxText2.style.color ="green"
            throw "Success";
    }
    else {
   
        email.classList.add('red__border')
        email.classList.remove('green__border')
        boxText2.style.color ="red"
        throw "Email be cannot be blank";
    }
    }catch(e) {
    boxText2.innerHTML = e
}
})

number.addEventListener('keyup', (e) => {
    let boxText3 = document.querySelector('.box__text3')
    let numberValue = number.value.trim()
try {
        if(numberValue.includes("+") &&  numberValue != "" ||numberValue.match(/[0-9]/) !=null && numberValue.length<=12 ) {
            number.classList.add('green__border')
            number.classList.remove('red__border')
            boxText3.style.color ="green"
            throw "Success";
    }
    else {
        number.classList.add('red__border')
        number.classList.remove('green__border')
        boxText3.style.color ="red"
        throw "number be cannot be blank";
    }
    }catch(e) {
         boxText3.innerHTML = e
}
})


let confirmPassword

password.addEventListener('keyup', (e) => {
    let boxText4 = document.querySelector('.box__text4')
    let passwordValue = password.value.trim().toLowerCase()
    confirmPassword = passwordValue

try {
        if(passwordValue.match(/[a-z]/) !=null  && passwordValue.match(/[0-9]/) !=null  && passwordValue != ""  &&passwordValue.length<=8 && passwordValue.match(/[!@#$%^&*]/) ==null) {
            password.classList.add('green__border')
            password.classList.remove('red__border')
            boxText4.style.color ="green"
            throw "Success";
    }
    else {
        password.classList.add('red__border')
        password.classList.remove('green__border')
        boxText4.style.color ="red"
        throw "password be cannot be blank";
    }
    }catch(e) {
         boxText4.innerHTML = e
}
})
console.log(confirmPassword);


password2.addEventListener('keyup', (e) => {
    let boxText5 = document.querySelector('.box__text5')
    let passwordValue2 = password2.value.trim().toLowerCase()

try {
        if(passwordValue2 === confirmPassword) {
            password2.classList.add('green__border')
            password2.classList.remove('red__border')
            boxText5.style.color ="green"
            throw "Success";
    }
    else {
        password2.classList.add('red__border')
        password2.classList.remove('green__border')
        boxText5.style.color ="red"
        throw "password2 be cannot be blank";
    }
    }catch(e) {
         boxText5.innerHTML = e
}
})
console.log(confirmPassword);