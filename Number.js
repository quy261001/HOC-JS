// Các phương thức với kiểu giữ liệu Number
const number1 = "5";
const number2 = "4.7";
console.log(parseInt(number1)) // 5 in ra kiểu giữ liệu Int
console.log(parseFloat(number2)) // 4.7 in ra kiểu giữ liệu float
const number3 = "-3";
console.log(Math.abs(number3)) // giá trị tuyệt đối 

//floor làm tròn dưới vd: 4.3 -> 4
console.log(Math.floor(4.3)) // 4
//ceil làm tròn trên vd: 4.3 -> 5
console.log(Math.ceil(4.3)) // 5
//round làm tròn trên dưới 0.5 vd: 4.3 -> 4, 4.5 -> 5
console.log(Math.round(4.3)) // 4
console.log(Math.round(4.5)) // 5
//toFixed giới hạn chữ số 
console.log(Number((1 / 3).toFixed(2))); // 0.33
//random chữ số
console.log(parseInt(Math.random()*10))
//Math.max(1.3, -5, 100); -> trả về số lớn nhất
console.log(Math.max(1, 2, 3, 4)) // 4
//Math.min(1.3, -5, 100); -> trả về số lớn nhất
console.log(Math.min(1, 2, 3, 4)) // 1
//pow lũy thừa
console.log(Math.pow(3, 2)) // 3^2 = 9
//isNaN vs Number.isNaN
// NaN -> Not a Number
console.log(isNaN('1')) // false
console.log(isNaN('sada'))// true
console.log(Number.isNaN(NaN))//true
console.log(Number.isNaN('dsaas'))// false