//a. Khai báo một hằng số number với giá trị là 12.
const number= 12;
console.log(number);

//b. Khai báo một biến name với giá trị là "my number"
var name= 'my number'; //cách 1: khai báo + gán
console.log(name);

var name; //cách 2: khai báo xong gán
name1= 'my number';
console.log(name1);

//c. Khai báo một biến isEven với giá trị là sai.
let isEven = false; 
console.log(isEven);

//d. Kiểm tra nếu number là số chẵn, gán lại isEven thành giá trị đúng.
if (number%2===0){
    isEven= true; // gán lại giá trị cho isEven nên không cần dùng let để khai báo lại nữa ( vì đã khai báo ở câu c)
}
console.log(isEven);