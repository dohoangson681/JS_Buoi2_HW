/**
 * Tính tiền lương nhân viên
 * Mô hình 3 khối : 
 * Bước 1 : Người dùng nhập vào số ngày làm việc
 * Bước 2 : Lấy giá trị và tính toán
 *      + Đầu tiên , dùng lệnh document. getElementById("").value để lấy giá trị người dùng nhập vào
 */
var luongMotNgay = 100000 ; 
function tinhTienLuong() {
   let soNgayLam =  document.getElementById("soNgayLam").value ; 
   let tienLuong = soNgayLam * luongMotNgay ; 
    document.getElementById("tienLuong").innerHTML = tienLuong + "đ"; 
    document.getElementById("result1").style.display = "block" ;

}
document.getElementById("btnBai1").onclick = 
tinhTienLuong ; 