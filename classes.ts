abstract class UserAccount {
  public name: string;
  protected age: number; // can read/write only in this class and subs

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string; // Can read/write only in this class
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log("YOUR LEVEL IS:");
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }

  logCharDetails() {
    console.log("Hi ma friend " + this.nickname);
  }
}

// const italo = new UserAccount("iaurg", 12);

/*
console.log(italo);
italo.logDetails();
*/

const jujuba = new CharAccount("Jujuba", 1, "jubs", 100);

jujuba.logDetails();
jujuba.logCharDetails();
jujuba.setLevel = 200;
console.log(jujuba.getLevel);
