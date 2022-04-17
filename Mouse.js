const button = document.querySelector(".button");
// mousemove, mouseover, mouseenter, mouseleave
// mousemove : số lần di chuyển trên 1 phần tử
button.addEventListener('mousemove', function() {
  console.log("ok ok ok");
});
// mouseover : nó sẽ chạy di chuyển chuột vào phần tử và con của phần tử đó
button.addEventListener('mouseover', function() {
  console.log("ok ok ok");
});
// mouseenter: nó sẽ chạy di chuyển chuột vào phần tử k có tác dụng lên phần tử con
button.addEventListener('mouseenter', function() {
  console.log("ok ok ok");
});
// mouseleave: nó sẽ chạy di chuyển chuột vào phần tử rồi rê ra ngoài
button.addEventListener('mouseenter', function() {
  console.log("ok ok ok");
});
// Sự khác nhau giữa clientXY và pageXY
// pageX, pageY, clientX, clientY
document.querySelector("mousemove", function(e) {
  console.log(`pageY: ${e.pageY}`) 
  console.log(`ClientY: ${e.ClientY}`) 
})
// clientY: lấy theo view port
// PageY: lấy theo document , khi mà có scroll thì sẽ thay đổi

// X cung tương tự