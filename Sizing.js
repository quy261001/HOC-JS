//1. offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop
function log(value) {
  console.log(value);
}

const boxed = document.querySelector(".boxed")
log(boxed.offsetWidth); // Độ rộng của phần tử 
log(boxed.offsetHeight); //Chiều cao của phần tử
log(boxed.offsetLeft); //vị trí của nó so với bên trái
log(boxed.offsetTop); //vị trí của nó so với phía trên
log(boxed.offsetParent); // lấy ra phần tử cha để lấy giá trị của phần tử cha

//2. clientWidth, clientHeight, clientLeft, clientTop
log(boxed.clientWidth);// độ rộng của phần tử trừ đi border
log(boxed.clientHeight);// chiều cao của phần tử trừ đi border
log(boxed.clientLeft);//vị trí của nó so với bên trái border
log(boxed.clientTop); //vị trí của nó so với bên trên border

//3. window.innerWidth,  window.outerWidth,  window.innerHeight,  window.outerHeight
log(window.innerHeight); // chiều cao của cửa sổ window - khung search
log(window.outerHeight); // chiều cảo của cửa sổ window

//4.selector.getBoundingClientRect() -> lấy ra tọa độ, kích thước của phần tử
log(boxed.getBoundingClientRect())