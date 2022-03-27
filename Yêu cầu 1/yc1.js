let userID = document.getElementById('txtUserID')
let password = document.getElementById('txtPassword')
let Name = document.getElementById('txtName')
let address = document.getElementById('txtAddress')
let userIDError = document.getElementById('userIDError')
let passwordError = document.getElementById('passwordError')
let nameError = document.getElementById('nameError')
let addressError = document.getElementById('addressError')
userID.addEventListener('focusout', leaveUserID)
function leaveUserID(){
    var  userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
    if (userIDRegex.test(userID.value)){
        userIDError.textContent = 'UserID hợp lệ'
        userIDError.style.color = 'blue'
    }
    else{
        userIDError.textContent = 'UserID không hợp lệ. Độ dài từ 5-12'
        userIDError.style.color = 'red'
    }
}
password.addEventListener('focusout', leavePassword)
function leavePassword(){
    var  passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
    if (passwordRegex.test(password.value)){
        passwordError.textContent = 'Password hợp lệ'
        passwordError.style.color = 'blue'
    }
    else{
        passwordError.textContent = 'Password không hợp lệ. Độ dài từ 7-12'
        passwordError.style.color = 'red'
    }
}
Name.addEventListener('focusout', leaveName)
function leaveName(){ 
    var  nameRegex = /^[a-zA-Z]+$/;
    if (nameRegex.test(Name.value)){
        nameError.textContent = 'Name hợp lệ'
        nameError.style.color = 'blue'
    }
    else{
        nameError.textContent = 'Name không hợp lệ'
        nameError.style.color = 'red'
    }
}
