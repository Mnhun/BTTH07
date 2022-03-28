// Gọi tất cả các hàm được sử dụng để xác nhận.
function formValidation()
 {
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
 {
     if (countryselect(ucountry)) {
        if (allnumeric(uzip)) {
             if (ValidateEmail(uemail)) {
                               
                            }
                        }
                    }
                }
            
    return false;
        }


// Hàm JavaScript để xác thực country
function countryselect(ucountry) {
    if (ucountry.value == "Default") {
        alert('Chọn quốc gia của bạn từ danh sách');
        ucountry.focus();
        return false;
    }
    else {
        return true;
    }
} 
// Hàm JavaScript để xác thực ZIP code
function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
        return true;
    }
    else {
        alert('Mã ZIP chỉ được có các ký tự số');
        uzip.focus();
        return false;
    }
}
// Hàm JavaScript để xác thực định dạng email
function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Nhập địa chỉ email hợp lệ!");
        uemail.focus();
        return false;
    }
}
