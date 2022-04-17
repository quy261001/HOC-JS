//1. Keydown: khi nhấn 1 phím xuống trên bàn phím
const input = document.querySelector(".input");
input.addEventListener("keydown", function(e) {
  //console.log(e.key) -> khuyến cáo nên sử dụng hơn e.keycode
  //console.log(e.keycode)
  if(e.key === "Enter") {
    console.log("okkk");
  } else {
    console.log(e.key);
  }
});

//2.keyup: khi nhấn 1 phím trên bàn phím rồi thả ra
input.addEventListener("keyup", function(e) {
  console.log("keyup")
})
//3.keypress: sự kiện này xảy ra khi nhấn phím
// keypress sẽ ignore(k nhận) những phím như delete, mũi tên, page up, page down, home, end, ctrl, alt, shift, esc
input.addEventListener("keypress", function(e) {
  console.log("keypress")
})
// Thứ tự hoạt động ưu tiên: keydown -> keypress -> keyup

//4. change: xảy ra khi gõ xong, nhấn Enter hoặc nhấn chuột ra ngoài 1 lần
input.addEventListener("change", function(e){
  console.log("change"); // gõ xong r nhấn chuột ra ngoài sẽ chạy
})