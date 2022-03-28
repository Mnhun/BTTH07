$(document).ready(function(){
    function checkSex(){
        let sex = $('.1:checked').val();
        if(sex == true){
            return true
        }
        return false
    }

    $("#btnRegister").click(function(e){
            e.preventDefault();
            if(checkSex()){
                $("#statusOfSex").text('Hợp lệ')
                $("#statusOfSex").css('color','blue')
            }
            else{
                $("#statusOfSex").text('Vui lòng chọn giới tính')
                $("#statusOfSex").css('color','red')
            }
        })
});
