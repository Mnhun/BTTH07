// Gọi tất cả các hàm được sử dụng để xác nhận.
function formValidation() {
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex; 
                                if (validsex(umsex, ufsex)) {
                                }
    return false;
}
// // Hàm JavaScript để xác thực giới tính
function validsex(umsex, ufsex) {
    x = 0;

    if (umsex.checked) {
        x++;
    } if (ufsex.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;
    }
}