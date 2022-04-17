// Các phương thức Array
const Array = ["long", "quy", "tuan", 1, 2, 3, "long"]
//1. length: dộ dài mảng
console.log(Array.length)// 6
//2. reverse: Đảo ngược giá trị trong mảng
console.log(Array.reverse())// [3, 2, 1, 'tuan', 'quy', 'long']
//3. Nối các phần tử trong mảng thành string
console.log(Array.join()) // 3,2,1,tuan,quy,long 
console.log(Array.join(" : "))// 3 : 2 : 1 : tuan : quy : long
//4.includes kiểm tra mảng có chứa phần tử cần tìm hay k
console.log(Array.includes("long")) // true
console.log(Array.includes("hoang")) // false
//5. indexOf , lastIndexOf: trả về vị trí của phần tử đầu tiên, cuối cùng tìm thấy
console.log(Array.indexOf("long"))// 5
console.log(Array.lastIndexOf("long"))// 0
//6. push: thêm phần tử vào cuối mảng
console.log(Array.push("viet")) //['long', 3, 2, 1, 'tuan', 'quy', 'long', 'viet']
//7. unshift: thêm phần tử vào đầu mảng
console.log(Array.unshift("Hiền")) // ['Hiền', 'long', 3, 2, 1, 'tuan', 'quy', 'long', 'viet']
//8. pop: xóa phần tử cuối cùng trong mảng
Array.pop();
console.log(Array) 
//9. shift: xóa phần tử đầu tiên trong mảng
Array.shift();
console.log(Array)

const animals = ["tiger", "lion", "horse", "elephant"]
//10. slice: tạo ra 1 mảng copy của mảng ban đầu
//slice() Tạo ra 1 mảng y hệt mảng ban đầu
const animals2 = animals.slice(); //['tiger', 'lion', 'horse', 'elephant']
console.log(animals2);
//slice(start).start -> vị trí index ở trong mảng 
const animals3 = animals.slice(1) // ['lion', 'horse', 'elephant']
console.log(animals3);
//slice(start, end) cũng là index
const animals4 = animals.slice(1, 4) // ['lion', 'horse', 'elephant']
console.log(animals4);

//11. splice: nó sẽ xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
const pets = ["dog", "cat", "bird", "dragon"];
//splice(start)
// const pets2 = pets.splice(2); //['dog', 'cat', 'bird', 'dragon']
// console.log(pets2)
//splice(start, deleteCount): deleteCount là số lượng phần tử muốn xóa hoặc thay thế 
//splice(start, deleteCount, item1, item2,...)
const pets3 = pets.splice(0, 1, "dinasour") // ['dinasour', 'cat', 'bird', 'dragon']
console.log(pets)
//12. sort sắp xếp các phần tử trong mảng theo chuẩn unicode-16
const random = [1, 9999, 10, 5, 09]
console.log(random.sort()) //[1, 10, 5, 9, 9999]
const random2 = [1, 9999, 10, 5, 09]
random2.sort(function(a, b) {
  if(a > b) return 1 // sắp xếp theo tăng dần
  if(a < b) return -1 // sắp xếp theo giảm dần
})
console.log(random2)
const random3 = random.sort((a,b) => a > b ? 1 : -1); // tăng dần
// const random3 = random.sort((a,b) => a > b ? -1 : 1); // giảm dần
console.log(random3)

//13. find: trả về phần tử đầu tiên trong mảng thỏa điều kiện nào đó, không tìm thấy thì trả về undefined
const numbers = [1, 9999, 100000, 5, 09] 
const findYourNumber = numbers.find((element) => element > 10)  
console.log(findYourNumber)// 9999
//findIndex: trả về vị trí index đầu tiên  trong mảng thỏa mãn điều kiện nào đó ,không tìm thấy thì trả về -1
const findYourIndex = numbers.findIndex((element) => element > 10)  
console.log(findYourIndex) //1

//14. map: duyệt ra từng phần tử trong mảng trả ra 1 mảng mới mà k thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5]
// trả ra một mảng mới mà các giá trị trong mảng cũ nhân 2
//.map(callback(value, index, array))
const listNumberDouble = listNumber.map((value, index, array) => {
  return value * 2;
})
console.log(listNumberDouble); //[2, 4, 6, 8, 10]
//15. forEach: duyệt ra từng phần tử trong mảng trả ra 1 mảng mới nhưng k giữ lại mảng ban đầu, và k thể return đc
//.forEach(callback(value, index, array))
const listNumberTripple = listNumber.forEach((value, index, array) => {
  return value * 2;
})
console.log(listNumberTripple);
//16. filter: Dùng để filter(sàng lọc) các phần tử trong mảng thỏa mãn điều kiện nào đó
//.filter(callback(value, index, array))
const greaterThanThree = listNumber.filter((value) => {
  return value > 3;
}) 
console.log(greaterThanThree);

//17. some: trả về true khi thỏa 1 điều kiện và ngược lại trả về false khi k thỏa đk nào cả
//.some(callback(value, index, array))
const someNumber = listNumber.some(value => value > 3);
console.log(someNumber); // true
//18. every: trả về true khi tất cả điều kiện đúng và ngc lại chỉ cần 1 cái sai thì trả về false
const everyNumber = listNumber.every(value => value > 3);
console.log(everyNumber); // false
//19. reduce: gom các phần tử trong mảng lại thành 1
//.reduce((a, b) => {}, initialize value)
const reduceNumber = listNumber.reduce(function(previousValue, currentValue) {
return previousValue + currentValue;
}, 0)
console.log(reduceNumber);

//bài tập: Đảo ngược một chuỗi. ví dụ: "My name is evondev" -> "evondev is name My"
function reverseString(str) {
  //split: ["My", "name","is", "evondev" ]
  //reverse: ["evondev", "is", "name", "My"]
  //join: evondev is name My
  return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is evondev"));

//bài tập: Đảo ngược một chuỗi bao gồm các kí tự. ví dụ: "i love" -> "evol i"
function reverseWord(value) {
  return value.split("").reverse().join("")
}
console.log(reverseWord("i love"))

//Array 3
//By value vs By referrences
//By value -> giá trị thật sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); //true
/// By referrences -> nói tới vùng bộ nhớ
arr1 = [1, 2]
arr2 = [1, 2]
console.log(arr1 === arr2) // false

//cách so sánh 2 mang cơ bản :
//JSON.stringify(value) -> convert giá trị sang dưới dạng JSON string
//toString()
//[1,2,3].toString() -> "1,2,3"
//JSON.stringify([1,2,3]) -> "[1,2,3]" (tạo ra string)
//[1,2,3]
//JSON.parse("[1,2,3]") -> [1,2,3] (tạo ra mảng)
console.log(JSON.stringify([1,2,3]))
console.log(JSON.parse("[1,2,3]"))
const arr1Str = JSON.stringify(arr1)
const arr2Str = JSON.stringify(arr2)
console.log(arr1Str === arr2Str ) 

// sao chép mảng: (mục đích tạo 1 mảng mới để làm việc mà k ảnh hưởng tới mảng gốc)
const students = ["a","b","c","d","e"]
//1. sử dụng phương thức slice()
const sliceStudents = students.slice();
//2. spread operator [...array]
const spreadStudents = [...students]
console.log(spreadStudents)

// Các cách gộp mảng cần nắm
const array1 = [1,2]
const array2 = [3,4]
const array3 = [5,6]
//1.concat
// array1.concat(array2, array3, ...)
const mergeArray = array1.concat(array2, array3)
console.log(mergeArray)
//2.spread operator
const mergeArray2 = [...array1, ...array2,...array3]
console.log(mergeArray2)  
// destructuring array
const toys = ["ball", "sowrd", "arrow", "magic", "water", "fire"]
const [x, y, z] = toys;
console.log(x, y, z)
//rest parameter
const [ball, sowrd, arrow, ...rest] = toys
console.log(rest)// ["magic", "water", "fire"]