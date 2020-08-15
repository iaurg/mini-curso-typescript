"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old");
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            console.log("YOUR LEVEL IS:");
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("Hi ma friend " + this.nickname);
    };
    return CharAccount;
}(UserAccount));
// const italo = new UserAccount("iaurg", 12);
/*
console.log(italo);
italo.logDetails();
*/
var jujuba = new CharAccount("Jujuba", 1, "jubs", 100);
jujuba.logDetails();
jujuba.logCharDetails();
jujuba.setLevel = 200;
console.log(jujuba.getLevel);
