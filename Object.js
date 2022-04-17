//2 cách truy xuất object
const student = {
  name: "tran duy quy",
  age: "21",
  male: true,
  hi: function() {
    console.log("hello every");
  },
}
//cách 1: Dot notation dấu chấm .
console.log(student.name);
//cách 2: bracket notation ["key"]
console.log(student["age"]);
// Thay đổi giá trị của Object
student.age = 20;
console.log(student.age) 
student.isDeverloper = true; 
student.hello = function() {
  console.log("hello")
}
console.log(student)
// Xóa giá trị trong Object
delete student.age;
delete student.hello;
console.log(student)
// for in trong object
for(let key in student) {
console.log(`${key}: ${student[key]}`)
}
// Object.keys(object) -> trả về 1 mảng chứa tất cả các keys của Object
const keys = Object.keys(student);
console.log(keys)// ['name', 'male', 'hi', 'isDeverloper']
console.log(keys.length)// 4
// Object.values(object) -> trả về 1 mảng chứa tất cả các giá trị của object
const values = Object.values(student)
console.log(values)
console.log(values.length)
// Object.entries -> trả về 1 mảng nested chưa keys và values [["name","tranduyquy",["age","21"]]]
const entries = Object.entries(student)
console.log(entries)
console.log(entries.length)
// Object.assign() -> gộp các object lại vs nhau
const a = {
  firstName: "quy",
}
const b = {
  lastName: "tran",
}
const c = Object.assign(a, b)
console.log(c) //{firstName: "quy", lastName: "tran"}
// cách 2
const d ={...a, ...b}
console.log(d) //{firstName: "quy", lastName: "tran"}
//Object.freeze -> đóng băng object k cho chỉnh sửa keys và value của object

//Object.seal -> cho phép chỉnh sửa nhưng k đc thêm key và value mới

//Cách sao chép một object {...object cần sao chép}
const user = {
  userName: "trần Duy QUý",
  school: {
    name: "evondev",
    room: {
      name: "IT",
    }
  }
}
// const newUser = {...user};
// newUser.userName = "tran thanh tuan"
// console.log(newUser)
console.log(user)
// const newUser2 = Object.assign({}, user);
// newUser2.school.name = "Degsin"
// console.log(newUser2)
//Cách sao chép một object phức tạp và k thay đổi giá trị của user gốc
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "desgin"
console.log(newUser3)
//Optional chaining
const student2 = {
  name: "tran duy quy",
  age: "21",
  male: true,
  hi: function() {
    console.log("hello every");
  },
  fullname: {
    name: "hello"
  }
}
// student2.fullname?.name
console.log(student2.fullname?.name)
//Destructuring object -> rút gọn
const {name, age, male} = student2;
//const name = student2.name
//function with object paremeter  
function whatYourInfo(obj) {
  console.log(obj.name, obj.age, obj.school)

}
const newObj = {
  school: "cao thang",
  age: 21,
  name: "evondev",
};
whatYourInfo(newObj);

//object destructuring parameter
function whatYourInfo2({name, age, school}) {
  console.log(name, age, school)
} 
whatYourInfo2({
  name: "quý",
  school:"thuận an",
  age:21
})