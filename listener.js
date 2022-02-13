const addListener = (element, evType, handler, obj = {
   addListener: (element, evType, handler) => (element.addEventListener(evType, handler), obj),
}) => (element.addEventListener(evType, handler), obj);

const addListeners = (elements, evType, handler, obj = {
   addListeners: (elements, evType, handler) => { for (const element of elements) element.addEventListener(evType, handler); return obj },
}) => { for (const element of elements) element.addEventListener(evType, handler); return obj };

const rmListener = (element, evType, handler, obj = {
   rmListener: (element, evType, handler) => (element.removeEventListener(evType, handler), obj),
}) => (element.removeEventListener(evType, handler), obj);

const rmListeners = (elements, evType, handler, obj = {
   rmListeners: (elements, evType, handler) => { for (const element of elements) element.removeEventListener(evType, handler); return obj },
}) => { for (const element of elements) element.removeEventListener(evType, handler); return obj };


const listener = {
   addListener,
   addListeners,
   rmListener,
   rmListeners,
};

export default listener;
