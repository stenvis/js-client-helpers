const GEBCN = name => document.getElementsByClassName(name);
const QS = selector => document.querySelector(selector);
const GEBI = id => document.getElementById(id);
const GEBTN = name => document.getElementsByTagName(name);
const GCTX = (canvas, ctx, attr) => canvas.getContext(ctx, attr);

const DOM = {
   GEBCN,
   QS,
   GEBI,
   GEBTN,
   GCTX,
};

export default DOM;