"use strict";
// Some patterns name for generics
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var myState = useState();
// The first type definition become default
myState.setState(1);
console.log(myState.getState());
// myState.setState("World"); <== Error because change the above setted type number
// If not pass the <TYPE> in useState get the default generic = string
var otherState = useState();
otherState.setState("Heio");
console.log(otherState.getState());
