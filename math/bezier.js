function bezier(curve, pS, pE) {
   let i, p1, p2;

   const { name, type } = curve;

   const types = {
      quad: {
         easeIn() { p1 = pS - ((pS - pE) / 10) },
         easeOut() { p1 = pE + ((pS - pE) / 10) },
      },
      cube: {
         easeInOut() {
            p1 = pS - ((pS - pE) / 10);
            p2 = pE + ((pS - pE) / 10);
         },
      }
   };

   const bezierCurves = {
      lerp: t => (1 - t) * pS + t * pE,
      quad: t => (i = 1 - t, i * i * pS + 2 * t * i * p1 + t * t * pE),
      cube: t => (i = 1 - t, i * i * (i * pS + 3 * t * p1) + t * t * (3 * i * p2 + t * pE)),
   }

   types[name][type]();

   return t => bezierCurves[name](t);
};

export default bezier;