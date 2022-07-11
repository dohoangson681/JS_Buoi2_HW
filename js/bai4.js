var chieuDai , chieuRong ; 
function CVDT(){
    chieuDai = document.getElementById("chieuDai").value ; 
    chieuRong = document.getElementById("chieuRong").value ; 
    let chuVi = (Number(chieuDai) + Number(chieuRong)) / 2;
    let dienTich = chieuDai*chieuRong ; 
    document.getElementById("chuVi").innerHTML = chuVi ; 
    document.getElementById("dienTich").innerHTML = dienTich ; 
    document.getElementById("result4").style.display = "block" ; 
}
document.getElementById("btnBai4").onclick = CVDT ; 