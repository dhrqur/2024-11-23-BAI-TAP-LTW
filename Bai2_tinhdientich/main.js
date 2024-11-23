// // Hàm tính diện tích hình chữ nhật
// function calculateRectangleArea(length, width) {
//     return length * width;
// }

// // Hàm tính diện tích hình tam giác
// function calculateTriangleArea(base, height) {
//     return (base * height) / 2;
// }

// // Hàm tính diện tích hình vuông
// function calculateSquareArea(side) {
//     return side * side;
// }

// // Nhập giá trị từ người dùng
// var length = Number(prompt("Nhập chiều dài hình chữ nhật: "));
// var width = Number(prompt("Nhập chiều rộng hình chữ nhật: "));
// var base = Number(prompt("Nhập độ dài cạnh đáy hình tam giác: "));
// var height = Number(prompt("Nhập chiều cao hình tam giác: "));
// var side = Number(prompt("Nhập độ dài cạnh hình vuông: "));

// // Tính diện tích và hiển thị kết quả
// document.write("Diện tích hình chữ nhật: " + calculateRectangleArea(length, width) + "<br>");
// document.write("Diện tích hình tam giác: " + calculateTriangleArea(base, height) + "<br>");
// document.write("Diện tích hình vuông: " + calculateSquareArea(side) + "<br>");

function calculateRectangleArea(){
    var D = document.getElementById('inputD').value; 
    var R = document.getElementById('inputR').value; 
    const S = D*R;
    document.getElementById('outputS').value = isNaN(S) || D === '' || R === '' ? 'Lỗi!' : S;
}
function calculateTriangleArea(){
    var CD = document.getElementById('inputCD').value;
    var CC = document.getElementById('inputCC').value;
    const TG = (CD*CC)/2;
    document.getElementById('outputTG').value = isNaN(TG) || CD === '' || CC === '' ? 'Lỗi!' : TG;
}
function calculateSquareArea(){
    var CHV = document.getElementById('inputCHV').value;
    const HV = (CHV*CHV);
    document.getElementById('outputHV').value = isNaN(HV) || CHV == '' ? 'Lỗi!' : HV;
}



