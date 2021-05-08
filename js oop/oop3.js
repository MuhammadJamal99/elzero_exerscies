const perObj = {
    name: "Muhammad Jamal Muhammad Bekheit",
    address: "17 st Al Saalam From Orabi st, shubra, Cairo, Egypt",
    age: 26,
    eduction: "faculty of Science, Benha University, Dept Of Computer science",
}
let finalData ='';
for( let info in perObj){
    finalData += `<div id="${info}">This is Your ${info} => ${perObj[info]}</div>`
}
console.log(finalData);
document.getElementById("info").innerHTML = finalData;

console.log('$$Punk$$'.repeat(15));

class Phone {
    constructor(ser, price, color) {
        this.serial = ser;
        this.price = price;
        this.color = color;
        method = function () {
            return "my name is Punk";
        };
    }
}
const phone1 = new Phone(111, 300, "Green");
const phone2 = new Phone(112, 400, "Black");
const phone3 = new Phone(113, 500, "Red");

console.log(phone1.color);
console.log(phone1.price);
console.log(phone1.serial);

console.log('$$Punk$$'.repeat(15));

console.log(phone2.color);
console.log(phone2.price);
console.log(phone2.serial);

console.log('$$Punk$$'.repeat(15));

console.log(phone3.color);
console.log(phone3.price);
console.log(phone3.serial);
