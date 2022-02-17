class Counter {
   #i = 0;   

   get value() {
      return this.#i;
   }

   set plus(n) {
      this.#i += n;
   }
   
   set minus(n) {
      this.#i -= n;
   }

   set equal(n) {
      this.#i = n;
   }

   reset() {
      this.#i = 0;
   }
};

export default Counter;
