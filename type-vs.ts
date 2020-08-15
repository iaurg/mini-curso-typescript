type GameT = {
  title: string;
};

type DLCT = {
  extra: string[];
};

// Intersection

type GameCollectionT = GameT & DLCT;

// Implements

/*Commented class because need to add constructor*/

// class CreateGameT implements GameCollectionT {}

// Function Declaration

type getSimilarsT = (title: string) => void;

// Differences

// Allow declare primitive types

type IDT = number | string;

// Allow tuples

type TuplesT = [number, string];

[1, "2"] as TuplesT;

// Only one declaration per scope

type JqueryT = { a: string };
// type JqueryT = { b: string }; <== Error, declare only one "type" with same name

/*
Better for most of times

Start with type and change to interface if needed
*/
