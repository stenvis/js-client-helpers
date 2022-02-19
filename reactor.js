import State from './state.js';

const stub = () => {};

class Reactor {
   #pool = {};
   #tasks = [];
   #worker = stub;
   #SWorker = new State();

   #executeTasks() {
      for (const task of this.#tasks) task();
      this.#tasks = []; 
      this.#worker = stub;
      this.#SWorker.toggle();
   }

   #setWorker() {
      if (this.#SWorker.isActive) return;
      this.#SWorker.toggle();
      this.#worker = this.#executeTasks;
   }

   addKernel(key, kernel) {
      this.addKernel = function(key, kernel) {
         this.#tasks.push(() => { this.#pool[key] = kernel; });
         this.#setWorker();
      };
      this.addKernel(key, kernel);
      this.#worker();
   }

   delKernel(key) {
      this.#tasks.push(() => { delete this.#pool[key]; });
      this.#setWorker();
   }

   iterate() {
      for (const key in this.#pool) {
         for (const element of this.#pool[key]) element();
         this.#worker();
      };
   }
};

export default Reactor;