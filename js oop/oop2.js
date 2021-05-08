let obj1 = {
    prop1: "prop1",
    prop2: "prop2",
    method1: function() {
        return "This is Method 1"
    }
}
let obj2 = {
    prop3: "prop3",
    prop4: "prop4",
    method2: function() {
        return "This is Method 2"
    }
}
let obj3 = {
    prop1: "prop5",
}

let target = {
    prop5: "prop5",
}

Object.assign(target,obj1,obj2,obj3);

console.log(target);
const newObj = Object.assign({},target,{prop8: "prop8"});
console.log(newObj);
delete newObj;
console.log(newObj);
delete newObj.prop8;
console.log(newObj);
console.log('$'.repeat(20));
const freezedObj = Object.freeze({
    prop1: "value1",
    prop2: "value2",
    method: function(){
        return "this is Freezed Method";
    }
});
console.log(freezedObj);
delete freezedObj.prop1
console.log(delete freezedObj.prop1);
console.log(freezedObj);
console.log('$'.repeat(20));
const eObj = {}
Object.defineProperty(eObj, "a", {value: 1, configurable: true});
console.log(eObj.a);
console.log(eObj);
delete eObj.a;
console.log(delete eObj.a);
console.log(eObj.a);
console.log(eObj);
