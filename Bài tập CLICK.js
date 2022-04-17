// Bài tập toggle Menu:
// const toggle = document.querySelector(".menu-toggle");
// const menu = document.querySelector(".menu");
// toggle.addEventListener("click", handleClick);
// function handleClick(e) {
//   toggle.classList.toggle("fa-times");
//   toggle.classList.toggle("fa-bars");
//   menu.classList.toggle("is-show");
// }
// document.addEventListener("click", handleClickOutMenu);
// function handleClickOutMenu(e) {
//   //console.log(event.target);
//   //event.target.matches("selector") : kiểm tra xem khi ta click vào có khớp với class nào đó hay không
//   //selector.contains: kiểm tra element có chứa element khác không
//   if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
//     menu.classList.remove("is-show");
//     toggle.classList.remove("fa-times");
//     toggle.classList.add("fa-bars");
//   }
// }

// bai tap: tabMenu:
// const tabItem =  document.querySelectorAll(".tab-item");
// const tabContent = document.querySelectorAll(".tab-content");
// [...tabItem].forEach(item => item.addEventListener("click", handleTabClick));
// function handleTabClick(e) {
//   // console.log(e.target)
//   // Xóa tất cả các class active ở các tab-item
//   [...tabItem].forEach(item => item.classList.remove("active"));
//   // Thêm các class active vào tab-item
//   e.target.classList.add("active");
//   //lấy ra dataset 
//   const tabNumber = e.target.dataset.tab;
//   // console.log(tabNumber);
//   [...tabContent].forEach(item => {
//     item.classList.remove("active");
//     console.log(item.getAttribute("data-tab"))
//     if (item.getAttribute("data-tab") === tabNumber) {
//       item.classList.add("active");
//     }
//   });
//   // [...tabContent][tabNumber - 1].classList.add("active"); trường hợp này khi bị xóa trộn HTML thì sẽ sai
// }

// bai tap: Accordion:
// const toggleHeader = document.querySelectorAll(".accordion-header");
// [...toggleHeader].forEach(item => item.addEventListener("click", handleClick));
// function handleClick(e) {
//   console.log(e.target);
//   const content = e.target.nextElementSibling
//   console.log(content.scrollHeight)
//   content.style.height = ${content.scrollHeight}px;
//   content.classList.toggle("is-active");
//   if (!content.classList.contains("is-active")) {
//     content.style.height = "0px";
//   }
//   const icon = e.target.querySelector(".icon")
//   console.log(icon);
//   icon.classList.toggle("fa-angle-up");
//   icon.classList.toggle("fa-angle-down");
// }

// Bài tập Modal:
// const button = document.querySelector(".button")
// const template = `<div class="modal">
// <div class="modal-content">
//   <i class="fa fa-times modal-close"></i>
// </div>
// </div>`;
// button.addEventListener("click", function(e) {
//   document.body.insertAdjacentHTML("beforeend", template);
// })
// document.body.addEventListener("click", function(e) {
//   console.log(e.target)
//   if (e.target.matches(".modal-close")) {
//     const modal = document.querySelector(".modal");
//     modal.parentNode.removeChild(modal)
//   } else if(e.target.matches(".modal")) {
//     e.target.parentNode.removeChild(e.target)
//   }
// })

// Bài tập Lightbox:
/* <div class="lightbox">
    <div class="lightbox-content">
      <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80" alt="" class="lightbox-image">
    </div>
</div> */
// const images = document.querySelectorAll(".content img");
// [...images].forEach(item => item.addEventListener("click", handleZoomImages));
// function handleZoomImages(e) {
//   console.log(e.target)
//   const image = e.target.getAttribute("src");
//   const template = ` <div class="lightbox">
//   <div class="lightbox-content">
//   <i class="fa fa-angle-left lightbox-prev"></i>
//     <img src="${image}" alt="" class="lightbox-image">
//     <i class="fa fa-angle-right lightbox-next"></i>
//   </div>
// </div>`
// document.body.insertAdjacentHTML("beforeend", template);
// }
// let index = 0;
// document.body.addEventListener("click", function(e) {
//   const lightImage = document.querySelector(".lightbox-image"); // lấy ra document của lightbox-image
//   if(!lightImage) return;
//   // có lightImage
//   let lightSrc = lightImage.getAttribute("src");
//   index = [...images].findIndex(item => item.getAttribute("src") === lightSrc); // lấy ra index của images
//   if(e.target.matches(".lightbox")) {
//     e.target.parentNode.removeChild(e.target)
//   } else if (e.target.matches(".lightbox-next")) {
//     //handle next image
//     index++
//     if(index > images.length - 1) {
//       index = 0;
//     };
//     displayLightImage(lightImage, index);
//   } else if(e.target.matches(".lightbox-prev")) {
//     //handle prev image
//     index--
//     if(index < 0){
//       index = images.length - 1;
//     };
//     displayLightImage(lightImage, index);
//   }
// })
// function displayLightImage(lightImage,index) {
//   const newSrc = [...images][index].getAttribute("src");
//   lightImage.setAttribute("src", newSrc);
// }

// Bài tập Dropdown:
// const dropdownSelect = document.querySelector(".dropdown__select");
// const dropdownSelected = document.querySelector(".dropdown__selected")
// const dropdownList = document.querySelector(".dropdown__list");
// const dropdownItem = document.querySelectorAll(".dropdown__item");
// const dropDown = document.querySelector(".dropdown");
// const dropdownCaret = document.querySelector(".dropdown__caret")
// //dropdownSelect
// dropdownSelect.addEventListener("click", function(e) {
//   dropdownList.classList.toggle("show");
//   dropdownCaret.classList.toggle("fa-caret-up")
// })
// //dropdownItem
// dropdownItem.forEach(item => item.addEventListener("click", function(e) {
//   const text = e.target.querySelector(".dropdown__text").textContent;
//   dropdownSelected.textContent = text;
//   dropdownList.classList.remove("show");
//   dropdownCaret.classList.remove("fa-caret-up")
// }))
// //click to document
// document.addEventListener("click", function(e) {
//   console.log(e.target)
//   if(!dropDown.contains(e.target)) {
//     dropdownList.classList.remove("show");
//   }
// })

//Bài tập Tooltip:
// window.addEventListener("load", function() {
//   const text = document.querySelector(".text");
//   text.addEventListener("mouseenter", function(e) {
//     const title = e.target.dataset.tooltip;
//     const tooltipDiv = document.createElement("div");
//     tooltipDiv.className = "tooltip-text";
//     tooltipDiv.textContent = title
//     document.body.appendChild(tooltipDiv);
//     // vị trí
//     const cords = e.target.getBoundingClientRect();
//     const {top, left, width} = cords;
//     const tooltipHeight = tooltipDiv.offsetHeight;
//     const triangleHeight = 20;
//     tooltipDiv.style.left = ${left - width / 2}px;
//     tooltipDiv.style.top = ${top - tooltipHeight - triangleHeight}px;
//   });
//   text.addEventListener("mouseleave", function(e){
//     const tooltipText = document.querySelector(".tooltip-text");
//     if(!tooltipText) return;
//     tooltipText.parentNode.removeChild(tooltipText); 
//   })
// })

// Bài tập Link hover effect
// window.addEventListener("load", function() {
//   const links = [...document.querySelectorAll(".menu-link")];
//   links.forEach(item => item.addEventListener("mouseenter",handleHoverLink));
//   const line = document.createElement("div"); 
//   line.className = "line-effect";
//   document.body.appendChild(line);
//   function handleHoverLink(e) {
//     const {left, top , width, height} = e.target.getBoundingClientRect();
//     line.style.width = ${width}px
//     line.style.left = ${left}px
//     line.style.top = ${top + height + 5}px
//   }
//   const menu = document.querySelector(".menu");
//   menu.addEventListener("mouseleave", function(e){
//     line.style.width = 0;
//   })
// });