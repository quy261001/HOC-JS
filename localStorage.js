//1.localStorage.setItem("key","value");
// localStorage.setItem("name", "evondev");
//2.localStorage.getItem("key");
// localStorage.getItem("name");
//3.localStorage.remove("key");
// localStorage.removeItem("name");
//4.localStorage.clear();
// localStorage.clear();
// không thể lưu trữ dưới dạng array
let arr = [1, 2, 3, 4, 5];
localStorage.setItem("list", JSON.stringify(arr));
const newArr = Json.parse(localStorage.getItem("list"));