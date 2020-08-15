interface Game {
  title: string;
}

interface DLC {
  extra: string[];
}

// Intersection / extends

interface GameCollection extends Game, DLC {}

// Implements

/*Commented class because need to add constructor*/

// class CreateGame implements GameCollection {}

// Function Declaration

interface getSimilars {
  (title: string): void;
}

// Differences

// NOT
// interface ID extends number {} <== Error interface not extends primitive types

// Not, the tupple become inconsistent
interface Tuple {
  0: number;
  1: string;
}

[1, "2", 3, 4] as Tuple;

// Allow multiple declarations per scope and merge equals

interface Jquery {
  a: string;
}

interface Jquery {
  b: string;
}

const example: Jquery = {
  a: "lll",
  b: "xx",
};

/*
Interfaces are better used when building librarys because allows users to extends types

And when using objects/classes (POO)
*/
