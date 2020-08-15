// Type Alias
type Uid = number | string | undefined;

type Platform = "Windows" | "Linux" | "Mac Os";

function logDetails(uid: Uid, item: string) {
  console.log(`A product ${uid} has a title ${item}`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name ${user}`);
}

function renderPlataform(plataform: Platform) {
  return plataform;
}

renderPlataform("Windows");
// renderPlataform("Xioami"); // <== Error

logDetails(1, "Italo");
// logDetails("1", "Italo"); // <== Error

logInfo(1, "Italo");
// logInfo("1", "Italo"); // <== Error
