// function sayhello(){
//     console.log("xinchao");
// }
// sayhello();

// //" in 1-->10, xin chao 
// for (let i = 1 ; i <= 10; i++){
//     console.log(i);
// }
// console.log("Xin cHao");


//fuction:Parameter
// function printNum(n){
//     for (let i = 1 ; i <= n; i++){
//     console.log(i);
// }
// }
// printNum(5);
// printNum(10);
// printNum(15);

// //fuction:Return value
// function getmax(a, b){
//     if (a>b){
//         return(a);
//     }
//     return(b);
// }
// const max= getmax(30,15);
// console.log(max);

// until xử lý cho string
var text = "       Đoạn   code được đặt tên và có thể tái sử dụng";
console.log(text.trim());
console.log(text.toLocaleUpperCase());
console.log(text.toLocaleLowerCase());
console.log(text.includes("đây"));
console.log(text.includes("Đoạn"));
console.log(text.replace("Đoạn", "Kia"));
console.log(text.split());
console.log(text.split("được"));
console.log(text.substring(10,20));
console.log(text.indexOf("được"));

// until xử lý cho mảng
let num =[1,2,3,4,5];
let newnum= num.map(num => num*3);
console.log(newnum);
console.log(num);

const str=["đây là một"," chuỗi và lấy ra","chuỗi thỏa mãn điều kiện"];
const newstr =str.filter(str => str.includes("chuỗi"));
console.log(newstr);

let num1 =[1,2,3,4,5];
let newnum1= num1.find(num1 => num1%2===0);
console.log(newnum1);


class Student {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
}
const sv1 = new Student("Lan", "Hà Nội");
const sv2 = new Student("Minh", "Đà Nẵng");
console.log(sv1);