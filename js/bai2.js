/**
 * 
 */
var sothu1 , sothu2 , sothu3 , sothu4 , sothu5 ; 
function tinhTB(){
    sothu1 = document.getElementById("soThu1").value ; 
    sothu2 = document.getElementById("soThu2").value ; 
    sothu3 = document.getElementById("soThu3").value ; 
    sothu4 = document.getElementById("soThu4").value ; 
    sothu5 = document.getElementById("soThu5").value ; 
    let result = Number(sothu1) + Number(sothu2) + Number(sothu3) + Number(sothu4) +Number(sothu5)  ; 
    result /=5 ; 
    document.getElementById("giaTriTrungBinh").innerHTML
    = result ; 
    document.getElementById("result2").style.display
    ="block" ; 

}
document.getElementById("btnBai2").onclick
= tinhTB ; 