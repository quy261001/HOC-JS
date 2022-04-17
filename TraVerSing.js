//traversing -> truy xuất đến những phần tử trong DOM 
//1. parentNode,  parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode) //.parentNode để truy xuất ra phân tử trên nó 1 cấp
console.log(span.parentElement) // .parentElement để truy xuất ra phân tử trên nó 1 cấp
//selector.parentNode hoặc selector.parentElement.removeChild(selector)
span.parentNode.removeChild(span);
//2. nextElementSibling vs previousElementSibling -> tìm phần tử đứng đằng dưới nó vs tìm thần tử đứng trên nó
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const prevSpan = span.previousElementSibling;
console.log(prevSpan)
//3. childNode: trả về 1 mảng các Node bên trong bao gồm textNode vs children: trả về 1 mảng các Node không bao gồm textNode
console.log(span.childNodes);// text <strong> text
console.log(span.children);
//4. firstChild vs firstElementChild -> lấy phần tử con đầu tiên bao gồm textNode vs lấy Element con đầu tiên và k lấy textNode
console.log(span.firstChild) // text
console.log(span.firstElementChild) //strong
//5. lastChild vs lastElementChild -> lấy phần tử con cuối bao gồm textNode vs lấy Element con cuối và k lấy textNode
console.log(span.lastChild) // text
console.log(span.lastElementChild) //strong
//6. nextSibling vs previousSibling