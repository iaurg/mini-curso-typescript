"use strict";
function logDetails(uid, item) {
    console.log("A product " + uid + " has a title " + item);
}
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name " + user);
}
function renderPlataform(plataform) {
    return plataform;
}
renderPlataform("Windows");
// renderPlataform("Xioami"); // <== Error
logDetails(1, "Italo");
// logDetails("1", "Italo"); // <== Error
logInfo(1, "Italo");
// logInfo("1", "Italo"); // <== Error
