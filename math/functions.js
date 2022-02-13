const mod = (x, y) => x - y * ~~(x / y),
const randInt = max => ~~(Math.random() * max);
const randInterval = (min, max) => Math.random() * (max - min) + min;
const lerp = (pS, pE, diff) => (1 - diff) * pS + diff * pE;

const math = {
   mod,
   randInt,
   randInterval,
   lerp,
};

export default math;
