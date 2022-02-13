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

class Balloon {
   #step = 1;
   #upperrange;
   #lowerrange;
   #lazyFn;
   #lazyFnInc;
   #lazyFnDec;

   constructor() {
      this.counter = new Counter();
   }

   set setStep(step) {
      this.#step = step;
   }
   
   set setLowerRange(n) {
      this.#lowerrange = n;
   }

   set setUpperRange(n) {
      this.#upperrange = n;
   }

   set setLazyFn(fn) {
      this.#lazyFn = fn;
   }

   set setLazyFnInc(fn) {
      this.#lazyFnInc = fn;
   }

   set setLazyFnDec(fn) {
      this.#lazyFnDec = fn;
   }

   increase = () => {
      if (this.counter.value < this.#upperrange) { this.counter.plus = this.#step; return; };
      this.counter.equal = this.#upperrange;
      if (this.#lazyFn) this.#lazyFn();
      if (this.#lazyFnInc) this.#lazyFnInc();
   }

   decrease = () => {
      if (this.counter.value > this.#lowerrange) { this.counter.minus = this.#step; return; };
      this.counter.equal = this.#lowerrange;
      if (this.#lazyFn) this.#lazyFn();
      if (this.#lazyFnDec) this.#lazyFnDec();
   }

   reset() {
      this.counter.equal = 0;
   }

   get value() {
      return this.counter.value; 
   }

   set value(n) {
      this.counter.equal = n;
   }
};

export { Ballon, Counter };
