interface Cat {
  name: string;
  color: string[];
  readonly age: number;
  sayMeow?: (times: number) => void;
}

const catx: Cat = {
  name: "Jubs",
  color: ["Black", "Yellow", "White"],
  age: 1,
  sayMeow: (times: number) => {
    for (let i = 0; i < times; i++) {
      console.log("Meeeoooooow");
    }
  },
};

// catx.age = 2; <== Error property is readonly

// Optional methods use block check
if (catx.sayMeow) {
  catx.sayMeow(6);
}

interface BabyCat extends Cat {
  yearBorn: number;
}

const newCat: BabyCat = {
  name: "Cabs",
  age: 0,
  color: ["White"],
  yearBorn: 2020,
};

class CreateCat implements Cat {
  name: string;
  age: number;
  color: string[];

  constructor(name: string, age: number, color: string[]) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

const classCat = new CreateCat("Mags", 12, ["Black"]);

console.log(classCat);
