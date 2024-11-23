function calculateRectangleArea(){
    var D = parseFloat(document.getElementById('inputD').value); 
    var R = parseFloat(document.getElementById('inputR').value); 

    if (isNaN(D) || isNaN(R) || D <= 0 || R <= 0) {
        alert("Vui lòng nhập chiều dài và chiều rộng hợp lệ.");
        return;
    }

    const S = D * R;
    document.getElementById('outputS').value = S;
}

function calculateTriangleArea(){
    var CD = parseFloat(document.getElementById('inputCD').value);
    var CC = parseFloat(document.getElementById('inputCC').value);

    if (isNaN(CD) || isNaN(CC) || CD <= 0 || CC <= 0) {
        alert("Vui lòng nhập cạnh đáy và chiều cao hợp lệ.");
        return;
    }

    const TG = (CD * CC) / 2;
    document.getElementById('outputTG').value = TG;
}

function calculateSquareArea(){
    var CHV = parseFloat(document.getElementById('inputCHV').value);


    if (isNaN(CHV) || CHV <= 0) {
        alert("Vui lòng nhập chiều dài cạnh hợp lệ.");
        return;
    }

    const HV = CHV * CHV;
    document.getElementById('outputHV').value = HV;
}















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



