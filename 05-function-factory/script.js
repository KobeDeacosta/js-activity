// Starter examples (function output expectations are provided in README)

// Start coding here...

// 1. Function factory: makeMultiplier(factor)
const makeMultiplier = factor => {
    return number => number * factor;
  };
  
  // Example usage:
  const double = makeMultiplier(2);
  console.log(double(5)); // 10
  
  const triple = makeMultiplier(3);
  console.log(triple(4)); // 12
  
  // 2. Function factory: makeGreeter(greeting)
  const makeGreeter = greeting => {
    return name => `${greeting}, ${name}!`;
  };
  
  // Example usage:
  const sayHi = makeGreeter("Hi");
  console.log(sayHi("Mia")); // "Hi, Mia!"
  
  const sayHello = makeGreeter("Hello");
  console.log(sayHello("Kobe")); // "Hello, Kobe!"
