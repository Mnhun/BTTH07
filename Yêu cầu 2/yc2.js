$(document).ready(function(){      
    $('#txtUserID').focusout(function(){
        var  userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if (userIDRegex.test($('#txtUserID').val())){
            $('#userIDError').text('UserID hợp lệ') 
            $('#userIDError').css('color','blue')
        }
        else{
            $('#userIDError').text('UserID không hợp lệ. Độ dài từ 5-12') 
            $('#userIDError').css('color','red')
        }
    })
    $('#txtPassword').focusout(function(){
        var  passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if (passwordRegex.test($('#txtPassword').val())){
            $('#passwordError').text('Password hợp lệ') 
            $('#passwordError').css('color','blue')
        }
        else{
            $('#passwordError').text('Password không hợp lệ. Độ dài từ 7-12.') 
            $('#passwordError').css('color','red')
        }
    })
    $('#txtName').focusout(function(){
        var  nameRegex = /^[a-zA-Z]+$/;
        if (nameRegex.test($('#txtName').val())){
            $('#nameError').text('Name hợp lệ.') 
            $('#nameError').css('color','blue')
        }
        else{
            $('#nameError').text('Name không hợp lệ.') 
            $('#nameError').css('color','red')
        }
    })
})