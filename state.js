function State() {
   this.bool = false;
};

State.prototype = {
   get isActive() { return this.bool },
};

State.prototype.toggle = function() {
   this.bool = !this.bool;
};

State.prototype.true = function() {
   this.bool = true;
};

State.prototype.false = function() {
   this.bool = false;
};

State.prototype.set = function(key, value) {
   this[key] = value;
};

State.prototype.get = function(key) {
   return this[key];
};

export default State;
