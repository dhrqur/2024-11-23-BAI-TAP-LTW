//Cái này hiển thị yêu cầu nhập ngay khi vào trang
// var doC = Number(prompt("Nhập độ C muốn chuyển đổi: "));
// var doF = doC * (9 / 5) + 32;
// document.write("Độ C muốn chuyển đổi là: ", doC, "<br>");
// document.write(doC, " độ C được chuyển đổi bằng " , doF, " độ F");

function chuyenDoi() {
    const doC = document.getElementById('inputC').value; //Lấy giá trị nhập từ ô có id là "inputC" trong html
    const doF = (doC * 9 / 5) + 32;
    document.getElementById('outputF').value = isNaN(doF) ? 'Lỗi!' : doF;
    //Nếu kiểm tra doF không phải là số thì trả về true, là số là false
    //Nếu true thì in ra lỗi, ngược lại in ra kết quả

}
