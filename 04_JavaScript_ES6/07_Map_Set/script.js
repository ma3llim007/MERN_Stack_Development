"use strict";
// Set
let MyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let obj = new Set(MyArray);
obj.add(10);
let obj2 = { name: "Mohd Sameer" };
obj.add(obj2);

// Map
// based on Key -> value pair
let MyMap = new Map([["1", "Mohd"], ["2", "Sameer"], ["3", "Irfan"]]);
MyMap.set("3","Irfan")
console.log(MyMap);
MyMap.forEach((element, index) => {
    // console.log(element,index);
})


// WeakSet
let ws = new WeakSet();
let ob1 = { "name": "Mohd Sameer" };
let ob2 = { "name": "Mohd Irfan Uddin" };
ws.add(ob1);
ws.add(ob2);
// console.log(ws);



// WeakMap
let wm = new WeakMap();
let ob3 = {};
let ob4 = {};
wm.set(ob3,"First Object")
wm.set(ob4,"Second Object");
// console.log(wm);