class Greeter {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello, ${this.name}!`;
  }
}

const greeter = new Greeter('World');

document.getElementsByTagName('main')[0].innerText = greeter.sayHello();
