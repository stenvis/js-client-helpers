const types = {
  Mouse,
};

function Cursor(type) {
  dict[type](this);
};

function scaleByDPR(input) {
   return ~~(input * window.devicePixelRatio || 1);
};

class Mouse {
   #position = [0, 0];

   move(ev) {
      const x = ev.clientX, y = ev.clientY;
      this.#position[0] = scaleByDPR(x);
      this.#position[1] = scaleByDPR(y);
   }
}

export default Cursor;
