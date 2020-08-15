"use strict";
var catx = {
    name: "Jubs",
    color: ["Black", "Yellow", "White"],
    age: 1,
    sayMeow: function (times) {
        for (var i = 0; i < times; i++) {
            console.log("Meeeoooooow");
        }
    },
};
// catx.age = 2; <== Error property is readonly
// Optional methods use block check
if (catx.sayMeow) {
    catx.sayMeow(6);
}
var newCat = {
    name: "Cabs",
    age: 0,
    color: ["White"],
    yearBorn: 2020,
};
var CreateCat = /** @class */ (function () {
    function CreateCat(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    return CreateCat;
}());
var classCat = new CreateCat("Mags", 12, ["Black"]);
console.log(classCat);
