user = {
  // propertise
  firstName: "Muhammad",
  lastName: "Punk",
  age: 26,
  addresses: {
    eg: "Cairp Shubra",
    ksa: "Meidna",
    usa: "Masteshustes",
    getMainAddress: () => `this is your sweet home: ${user.addresses.eg}`
  },
  // methods
  getFullName: () => `Full Name IS: ${user.firstName} ${user.lastName}`,
  getAgeInDays: () => `Your Age In Days Is: ${user.age * 365}`,
};
let mainObject = {
  hasDiscount: true,
  showMSg: function(){
    return `You${this.hasDiscount?"":" Don't"} Have Discount`;
  }
}
// accessing properties
console.log(user.firstName);
console.log(user.lastName);
console.log(typeof user.firstName);
console.log(typeof user.lastName);
// accessing methods
console.log(typeof user.getFullName);
console.log(user.getFullName());
console.log(typeof user.getAgeInDays);
console.log(user.getAgeInDays());
console.log(typeof user.addresses.getMainAddress);
console.log(user.addresses.getMainAddress());

let copyObject = Object.create(mainObject);
copyObject.hasDiscount = false;
console.log(mainObject.hasDiscount);
console.log(mainObject.showMSg());
console.log(copyObject.hasDiscount);
console.log(copyObject.showMSg());

