// Các phương thức date
const now = new Date();
console.log(now);
// timestamp (miliseconds)
console.log(now.getTime());
// Epoch time
console.log(new Date(0));
// 4 cách sử dụng new Date
// new Date() -> In ra ngày giờ hiện tại 
// new Date(timestamp) -> dựa vào timestamp để in ra ngày giờ 
console.log(new Date(1646452149980))
// new Date(date string) -> 
console.log(new Date('Sat Mar 05 2022 10:49:09 GMT+0700 (Giờ Đông Dương)'))
// new Date(year, month, day, hour, minute, second, millisecond) 
console.log(new Date(2021, 9, 14, 23, 23, 23, 23))
// các hàm get trong Date
const birthday = new Date(2001, 9, 26)
// getFullYear()
console.log(birthday.getFullYear()) // 2001
console.log(birthday.getMonth()) //10
console.log(birthday.getDate()) //26
console.log(birthday.getDay()) // 0-6 (0 là chủ nhật) 
console.log(birthday.getHours()) //
console.log(birthday.getMinutes()) //
console.log(birthday.getMilliseconds()) //

// hàm Set trong Date 
console.log(`Birthday: ${birthday}`)
birthday.setFullYear(1999)
birthday.setMonth(0)
birthday.setDate(30)
birthday.setHours(12)
birthday.setMinutes(2)
birthday.setMilliseconds(20)
console.log(`Birthday update: ${birthday}`)

//newDate( date string )
console.log(now.toDateString()) // Sat Mar 05 2022
console.log(now.toTimeString()) // 11:16:47 GMT+0700 (Giờ Đông Dương)
console.log(now.toLocaleDateString()) // 5/3/2022 (m/dd/yyyy)
console.log(now.toISOString())// 2022-03-05T04:21:07.806Z
// bt: input :Sat Mar 05 2022 10:49:09 GMT+0700 (Giờ Đông Dương)
const myTime = new Date("Sat Mar 05 2022 10:49:09 GMT+0700 (Giờ Đông Dương)")
const myYear = myTime.getFullYear() // 2022
const myMonth = myTime.getMonth() + 1 // 5
const myDate = myTime.getDate() // 3
const fixMoth = myMonth < 10 ? "0" : "";
console.log(`${myDate}/${fixMoth}${myMonth}/${myYear}`)

//setTimeout đặt hẹn
// setTimeout(function() {
//   alert('xin chào')
// }, 3000)
//setInterval chạy liên tục theo thời gian đưa ra
const timer = setInterval(function() {
  console.log("hello")
}, 2000)
clearInterval(timer)

// Bài tập:
// Bài 1:
// const yourAge = function(myAge) {
//   const presentTime = new Date();
//   const currentYear = presentTime.getFullYear()
//   return currentYear - myAge
// }
// console.log(yourAge(2001))

//Bài 2:
function countdown(minutes ) {
  let second = minutes * 60;
  let counters = 0;
  const timer = setInterval(function() {
  counters += 1;
  console.log(counters)

  if (counters === second){
    clearInterval(timer);
    alert("your time is end!")
  }
  }, 1000); 
}

