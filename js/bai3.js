var tienUS  , oneUS = 23500; 
function doiTien(){
    tienUS = document.getElementById("tienUS").value ; 
    let tienViet = tienUS * oneUS ; 
    document.getElementById("tienViet").innerHTML
    = tienViet + "đ"; 
    document.getElementById("result3").style.display = "block" ; 
}
document.getElementById("btnBai3").onclick = doiTien ; 