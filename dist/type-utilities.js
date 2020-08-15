"use strict";
/*
List with all utilities: https://www.typescriptlang.org/docs/handbook/utility-types.html
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: "Build a ship",
    description: "I know how to do that?",
    completed: false,
};
// todo.completed = true; <== Error, utilitie readonly block this
// Partial allows to use some fields from type
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
console.log(updateTodo(todo, { completed: true }));
var todo2 = {
    title: "Build githubis",
    completed: false,
};
var todo3 = {
    title: "Build githubis",
    completed: false,
};
