
$(document).ready(function(){
    function checkCountry(){
        let optionCountry =  $('#selectCountry').val();
        if(optionCountry == 'Default'){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkCountry()){
            $("#statusOfCountry").text('Vui lòng chọn quốc gia')
            $("#statusOfCountry").css('color','red')
        }
        else{
            $("#statusOfCountry").text('Hợp lệ')
            $("#statusOfCountry").css('color','blue')
        }
    })
})

$(document).ready(function(){
   
    function checkCode(){
        let txtCode = $('#txtCode').val();
        let txtCoderegex = /^[0-9]+$/;
        if(txtCoderegex.test(txtCode)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkCode()){
            $("#statusOfCode").text('Mã zip hợp lệ')
            $("#statusOfCode").css('color','blue')
        }
        else{
            $("#statusOfCode").text('Mã zip không hợp lệ')
            $("#statusOfCode").css('color','red')
        }
    })
})

$(document).ready(function(){
   
    function checkMail(){
        let txtMail = $('#txtMail').val();
        let txtMailregex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+[a-zA-Z]{2,4}$/;
        if(txtMailregex.test(txtMail)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkMail()){
            $("#statusOfMail").text('Email hợp lệ')
            $("#statusOfMail").css('color','blue')
        }
        else{
            $("#statusOfMail").text('Email không hợp lệ')
            $("#statusOfMail").css('color','red')
        }
    })
})


