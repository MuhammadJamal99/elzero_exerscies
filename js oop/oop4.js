class User {
    constructor(name, age, email, address, show) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.showEmail = function() {
            if(show === true) {
                return `Email Is: ${this.email}`;
            } else {
                return `This Data Is Private Data`
            }
        }
        this.updateName = function(name) {
            this.name = name;
        }
    }
}

let user1 = new User("Muhammad Punk",26,"muhammadjammi18@gmail.com","Shubra, Cairo Egypt",false);
console.log(user1.name);
console.log(user1.age);
console.log(user1.showEmail());
console.log(user1.address);
user1.updateName("Ahmed Jika");
console.log(user1.name);
console.log(user1.age);
console.log(user1.showEmail());
console.log(user1.address);
User.prototype.addTitle = function() {
    return `Mr. ${this.name}`;
}
console.log(user1.name);
console.log(user1.age);
console.log(user1.showEmail());
console.log(user1.address);
console.log(user1.addTitle());

console.log(User.prototype);
console.log(user1);
Object.prototype.hisNameIsKane = function(){
    return 'your name is Kane';
}

console.log(String.prototype);

String.prototype.zFill = function(width) {
    let res = this;
    while(res.length < width){

    }
}