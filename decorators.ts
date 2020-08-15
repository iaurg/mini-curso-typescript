/*
Types of decorators:
Class decorators
Property decorators
Method decorators
Parameter
Acessor decorators
*/

//Basic class decorator

// Factory
function Logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} - ${target}`);
  };
}

//@Logger("oi")
class Foo {}

// Class decorator

function setApiVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

@setApiVersion("1.0.0")
class API {}

console.log(new API());

// Property decorator

function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: ${key} need at least ${length} characters`);
      } else {
        val = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  // decorator here
  @minLength(5)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie("Hereditario");

// Method decorator, runs everytime method is called

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log("Esperando");
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);

      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  @delay(1000)
  greet() {
    console.log(`Hello ${this.greeting}`);
  }
}

const pessoa = new Greeter("Pessoax");

pessoa.greet();
