console.log("helo");
// cú pháp đẻ truy xuất đến 1 thẻ html qua id của thẻ*/
var tagH1 = document.getElementById("title");

/*
truy xuất nội dụng của 1 thẻ <tag>innerHTML</tag>
*/

tagH1.innerHTML = "hello bc45";

/*
truy xuất nội dung hình ảnh
.src
 */
var tagImg = document.getElementById("img");

tagImg.src = "./image/chilling-cafe-13.jpg";

/*
cú pháp để truy xuất các giá trị nhập vào từ các thẻ input
.value = "giá trị";
 */

var tagInput = document.getElementById("txt");
tagInput.value = "!!!";

/*
truy xuất đến css cảu thẻ 
.style.color = "red"
 */

var tagTitle = document.getElementById("tieu-de");
tagTitle.style.color = "red";
tagTitle.style.background = "black";
tagTitle.style.padding = "15px";
tagTitle.style.fontSize = "50px";

/* 
truy xuất đến class(className) của thẻ 
.className = "abc";
*/

var btn = document.getElementById("btn-click-me");
btn.className = "btn btn-danger";


//function: hàm thực thi 1 đoạn lệnh nào đó khi chúng 
//gọi hàm

/*
khai báo hàm:
function tenHam(){
    //nội dung code
}

*/

//lệnh gọi tên hàm
// tenHam();

function changeContent() {

}

//bài 1
function tinhTien() {
    //input: tienLuong1h :number , soGioLam
    var tienLuong1h = document.getElementById("tien-luong-1h").value;
    var soGioLam = document.getElementById("gio-lam").value;

    var tienLuong = tienLuong1h * soGioLam;

    document.getElementById("ket-qua-bai-1").innerHTML = tienLuong;
    tagKetQua.innerHTML = tienLuong;
    tagKetQua.className = "alert bg-dark text-white p-3";
}

/*
biến toàn cục (global variable)
phạm vi sử dụng: nằm ở scope ngoài thì sẽ sử dụng dược
cho các scope con
*/


//bài 2
var tagImg = document.getElementById("img-den");
var btnBatDen = document.getElementById("btn-bat-den");
var btnTatDen = document.getElementById("btn-tat-den");


function batDen() {
    tagImg.src = "/image/pic_bulbon.gif ";
    btnBatDen.className = "";
    btnBatDen.className = "btn btn-success";
}
function tatDen() {
    tagImg.src = "/image/pic_bulboff.gif";
    btnTatDen.className = "";
    btnTatDen.className = "btn btn-success";
}

// bài tập 3

function dangNhap() {
    var taiKhoan = document.getElementById("tai-khoan").value;
    var matKhau = document.getElementById("mat-khau").value;

    var htmlString = "";

    htmlString = "tài khoản: " + taiKhoan + "- Mât Khẩu: " + matKhau;

    document.getElementById("ket-qua-bai-3").innerHTML = htmlString;

}

function selectoption1(){
    document.getElementById("btn-option-2").disabled = true;

}

function selectoption2(){
    document.getElementById("btn-option-1").disabled = true;
    
}