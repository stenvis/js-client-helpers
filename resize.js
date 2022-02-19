class Resize {
   target;
   aspect;
   dpr;
   width;
   height;
   dependencies = {};
   keys = [];

   constructor(target, w = target.clientWidth, h = target.clientHeight) {
      target.width = w;
      target.height = h;
      this.target = target;
      new ResizeObserver(this.executeResize).observe(target);
   }

   get aspect() {
      return this.aspect;
   }

   addDependency(key, fn) {
      this.dependencies[key] = fn;
      this.setKeys();
   }

   delDependency(key) {
      delete this.dependencies[key];
      this.setKeys();
   }

   setKeys() {
      this.keys = Object.keys(this.dependencies);
   }

   execDependencies() {
      for (const key of this.keys) this.dependencies[key]();
   }

   executeResize = entries => {
      const entry = entries[0];
      let width, height;

      if (entry.devicePixelContentBoxSize) {
         width = entry.devicePixelContentBoxSize[0].inlineSize;
         height = entry.devicePixelContentBoxSize[0].blockSize;
         this.updateSize(width, height);
         return;
      };

      if (entry.contentBoxSize) {
         if (entry.contentBoxSize[0]) {
            width = entry.contentBoxSize[0].inlineSize;
            height = entry.contentBoxSize[0].blockSize;
         } else {
            width = entry.contentBoxSize.inlineSize;
            height = entry.contentBoxSize.blockSize;
         };
      } else {
         width = entry.contentRect.width;
         height = entry.contentRect.height;
      };

      this.updateSize(width, height);
   }

   checkSizes(w, h) {
      if (w == this.width & h == this.height) return;
      this.target.width = this.width = w;
      this.target.height = this.height = h;
      this.aspect = w / h;
      this.checkZoom(false);
   }

   checkZoom() {
      const dpr = window.devicePixelRatio;
      if (dpr == this.dpr) return;
      this.dpr = dpr;
   }

   updateSize(w, h) {
      this.checkSizes(w, h);
      this.checkZoom();
      this.execDependencies();
   }
};

export default Resize; 
