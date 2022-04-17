// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
// button.addEventListener("click", function() {
//   console.log('click me')
// })

function handleClick() {
  console.log("click button");
}
// lỗi sai khi dung function vào eventListener
// button.addEventListener("click", handleClick()) // sai
// đúng -> button.addEventListener("click", handleClick)
button.addEventListener("click", handleClick);
//Bubbling : nổi bọt -> sự kiện chạy từ trong ra ngoài 
span.addEventListener("click", function(e) {
  e.stopPropagation(); //ngăn chặn vấn đề nổi bọt
  e.stopImmediatePropagation // ngăn chăn mọi sự kiện khác tiếp theo của thẻ này
  console.log("click span")
})
//Capturing trong click : ngược lại với Bubbling đi từ ngoài vào trong
button.addEventListener("click", handleClick, {
  capture: true
});

//target vs currentTarget 
button.addEventListener("click", function(e) {
  //e.target: nó sẽ chọn chính xác element mà mình click tới
  console.log(`event.target: ${e.target}`);
  //e.currentTarget: nó sẽ chọn phần tử mà mình click
  console.log(`event.currentTarget: ${e.currentTarget}`)
})

//event.preventDefault() -> ngăn chặn 1 hành vi mặc định nào đó
const link = document.querySelector(".link");
link.addEventListener("click", handleClick);
function handleClick(e) {
  e.preventDefault();
  // lấy custom attribute data-abc
  //.dataset.name
  const name = e.target.dataset.name
  e.target
  //selector.style.property = value
  //e.target.style.property = value
  //console.log(e.target)
  //console.log(e.target.style)
  //e.target.style.color = "red";
  //background-color -> backgroundColor
  //position -> position
}
//custom attribute : cú pháp data-yourname vd: data-name = "evondev"


// Bài tập Menu
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleClick);
function handleClick(e) {
  toggle.classList.toggle("fa-times");
  toggle.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(e) {
  //console.log(event.target);
  //event.target.matches("selector") : kiểm tra xem khi ta click vào có khớp với class nào đó hay không
  //selector.contains: kiểm tra element có chứa element khác không
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    toggle.classList.remove("fa-times");
    toggle.classList.add("fa-bars");
  }
}