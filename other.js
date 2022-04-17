// document.title -> thẻ title của trang web
console.log(document.title); //Javascript
document.title = "hello"
//document.head
console.log(document.head);

//insertBefore
// parentNode.insertBefore(newnode, existingnode);
const ul = document.querySelector("ul");
document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling); 
// khác với insertAdjacentElement là có thể sử dụng kết hợp với nhiều phương thức ở existingnode