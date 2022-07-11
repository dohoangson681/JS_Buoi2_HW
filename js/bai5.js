var number ; 
function tongCS(){
    number = document.getElementById("so2ChuSo").value ; 
    let soCuoiCung = number % 10 ; 
    let soDauTien = Math.floor(number  /  10) ; 
    let sum = soCuoiCung + soDauTien ; 
    document.getElementById("tong2ChuSo").innerHTML
    = sum ; 
    document.getElementById("result5").style.display = "block" ; 
   
}
document.getElementById("btnBai5").onclick = tongCS ; 