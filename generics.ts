/*
Docs for generics: https://www.typescriptlang.org/docs/handbook/generics.html

Some patterns name for generics
S => State
T => Type
K => Key
V => Value
E => Element 
*/

type numberOrString = number | string;

function useState<S extends numberOrString = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const myState = useState<number>();

// The first type definition become default
myState.setState(1);

console.log(myState.getState());

// myState.setState("World"); <== Error because change the above setted type number

// If not pass the <TYPE> in useState get the default generic = string
const otherState = useState();
otherState.setState("Heio");
console.log(otherState.getState());
