class CoffeeMachine {
  #boilWater() {
    console.log("Boiling water...");
  }

  #grindBeans() {
    console.log("Grinding coffee beans...");
  }

  #brew() {
    console.log("Brewing coffee...");
  }

  // Public method (abstraction)
  makeCoffee() {
    this.#boilWater();
    this.#grindBeans();
    this.#brew();
    console.log("☕ Coffee is ready!");
  }
}

// User only calls one method
const machine = new CoffeeMachine();
machine.makeCoffee();
