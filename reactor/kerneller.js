class Kerneller {
   reactor;    

   constructor(reactor) {
      this.reactor = reactor;
   }

   createController(key, kernel) {
      return new Controller(this.reactor, key, kernel);
   }
}; 

class Controller {
   #reactor;
   #key;
   #kernel;

   constructor(reactor, key, kernel) {
      this.#reactor = reactor;
      this.#key = key;
      this.#kernel = kernel;
   }

   addKernel() {
      this.#reactor.addKernel(this.#key, this.#kernel);
   }

   delKernel() {
      this.#reactor.delKernel(this.#key);
   }
};

export default Kerneller;