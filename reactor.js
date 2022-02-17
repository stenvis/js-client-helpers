import State from './state.js';

const stub = () => {};

class Reactor {
   #pool = {};
   #tasks = [];
   #worker;
   #SWorker = new State();

   #executeTasks() {
      for (task of this.#tasks) task();
      this.#tasks = []; 
      this.#worker = stub;
      this.#SWorker.toggle();
   }

   #setWorker() {
      if (!this.#SWorker.isActive) return;
      this.#SWorker.toggle();
      this.#worker = this.#executeTasks;
   }

   addKernel(key, kernel) {
      this.#tasks.push(() => { this.#pool[key] = kernel; });
      this.#setWorker();
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

   t() {
      console.log(this.#SWorker);
   } 
};

export default Reactor;