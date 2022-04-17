// 1.DOM là gì ?
// Document Object Model
// DOM Attribute
// DOM node
// 2. Selecting nodes 
// 2.1 document.querySelector("selector") -> trả về 1 node nếu tồn tại selector đó, ngược lại sẽ trả về null
// selectors: .header, p, body, #heading,...
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
// 2.2 document.querySelectorAll("selector") -> trả về 1 NodeList chứa danh sách các node, nếu không thì trả về empty
// Nó có thể loop(lặp) và sử dụng forEach
// Nó giống array là có thể loop nhưng ko sử dụng được các phương thức như push, pop, shift,...

//  2.3 document.getElementsByClassName("ClassName") -> trả về 1 HTMLCollection chứa danh sách các node, nếu không thì trả về empty []
//  2.4 document.getElementsByTagName("TagName") -> trả về 1 HTMLCollection chứa danh sách các node, nếu không thì trả về empty []
//  2.5 document.getElementById("id")

//Attribute:
// 3.1 selector.getAttribute("attribute")
//selector: 1 cái 
// attribute -> thuộc tính :href, id, class, src, style,...
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
// li.getAttribute("class"); lấy ra nhiều Attribute
li.forEach((item) => {
  console.log(li.getAttribute("class"));
})
//3.2 selector.setAttribute("attribute", value) -> set giá trị cho attribute nào đó cho selector
link.setAttribute("target", "_blank"); // chỉ làm đc 1 item đầu tiên 
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => item.getAttribute("target", "_blank")); // cách làm nhiều item
//3.3 selector.removeAttribute("attribute") -> xóa attribute 
const p = document.getElementById("spinner");
p.removeAttribute("style");
//3.4 selector.hasAttribute("attribute") -> kiểm tra selector có attribute nào đó hay không nếu có trả về true nếu k trả về false

//4.1 Thuộc tính textContent
const spinner = document.querySelector("#spinner")
//thay đổi text content
spinner.textContent = "hello word"
console.log(spinner.textContent)
//4.2 Thuoocj tinhs textContent: tương tự như textContent nhưng loại bỏ các khoảng trắng
//4.3 Thuộc tính innerHTML -> lấy ra nội dung của selector bao gồm cả HTML

//Các phương thức về class
//5.1 selector.classList.add("class") -> thêm class
const container = document.querySelector(".container");
container.classList.add("is-active");
//5.2 selector.classList.remove("class") -> xóa class
container.classList.remove("container");
//5.3 selector.classList.contains("class") -> kiểm tra coi có chứa class nào đó hay k
container.classList.contains("container"); // false
//5.4 selector.classList.toggle("class") -> nếu có class đó rồi thì sẽ remove còn không chưa class đó thì add thêm  
container.classList.toggle("container")
//6.1 selector.classname -> trả ra chuỗi các class của selector

//7 thêm xóa sửa node trong Javascript
//7.1 Tạo ra Element trong Javascript: document.createElement("tag")
const div = document.createElement("div")
//7.2 selector.appendChild
//document.body -> thẻ body
//document.querySelector("body")
const body = document.body;
body.appendChild(div);
//7.3 document.createTextNode -> tương tự như textContent
const text = document.createTextNode("Hello my name ...")
body.appendChild(text);
//7.4 element.cloneNode -> tạo bản sao Node
const h1Clone = h1.cloneNode(true); // nếu có true thì copy hết bên trong còn nếu k có thì chỉ copy thẻ
body.appendChild(h1Clone)
//7.5 Phương thức hasChildNodes -> kiểm tra element có phần tử con hay k trả về boolean
console.log(h1.hasChildNodes())