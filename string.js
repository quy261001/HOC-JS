// Các phương thức về string
const myStr = "Frontend developer"
//1. split (dùng để tách chuỗi)
console.log(myStr.split("")); // "F", "r", "o", "n",....
//2. toLowerCase (dùng để chuyển về chữ in Thường)
console.log(myStr.toLowerCase()); //"frontend developer"
//3. toUpperCase (dùng để chuyển về chữ in Hoa)
console.log(myStr.toUpperCase());// "Frontend developer"
//3. startsWith (dùng để check coi chuỗi bắt đầu bằng chữ đó hay k trả về giá trị boolean)
console.log(myStr.startsWith("Frontend")); // true
//4. startsWith (dùng để check coi chuỗi kết thúc bằng chữ đó hay k trả về giá trị boolean)
console.log(myStr.endsWith("Frontend")); // false
//5. incudes (dùng để check coi chuỗi có chứa chữ cần tìm hay không trả về giá trị boolean)
console.log(myStr.includes("Front")); // true
//6. indexOf (lấy ra vị trí của chữ trong chuỗi)
console.log(myStr.indexOf("r")); // 1
//7. lastIndexOf (lấy ra vị trí của chữ đó nằm cuối cùng trong chuỗi)
console.log(myStr.lastIndexOf("r")); // 17
//8. replace (dùng để thay thế chữ khác vào trong chuỗi)
console.log(myStr.replace("developer", "designer")); // Frontend designer
//9. repeat (dùng để lặp lại chuỗi cần lặp) 
console.log(myStr.repeat(2)); // Frontend developerFrontend developer
//10. slice (start, end - 1) (lấy ra chuỗi bằng index) 
console.log(myStr.slice(0, 8)); // Frontend
console.log(myStr.slice(0)); // Frontend developer
console.log(myStr.slice(-1)); // r
//11. trim (loại bỏ khoảng trống giữa 2 bên)
console.log(myStr.trim()); // Frontend developer
console.log(myStr.trimStart()); // loại bỏ khoảng trống bên trái
console.log(myStr.trimEnd()); // loại bỏ khoảng trống bên phải
//12. charAt (lấy ra ký tự theo vị trí index)
console.log(myStr.charAt(0)) // F
//13. substr (index, length) (lấy ra 1 phần của chuỗi)
console.log(myStr.substr(1, 5)); // ronte
//14. substring (start index, end index) (lấy ra các ký tự của chuỗi )
console.log(myStr.substring(1, 5)) // ront



