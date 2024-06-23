// Async
function asyncFunc(callback) {
  return new Promise((resolve) => {
    let nextCount = 0;

    const caches = []

    const awaitFunc = (awaitCb) => {
      const cacheCount = nextCount;

      if (caches[nextCount] === undefined) {
        const result = awaitCb
        if (awaitCb instanceof Function) {
          result = awaitCb();
        }
        if (result instanceof Promise) {
          result.then(res => {
            caches[nextCount] = res;
            try {
              nextCount = 0
              resolve(callback(awaitFunc));
            } catch { }
          })
          throw "no cache";
        } else {
          caches[nextCount++] = result;
        }
      } else {
        nextCount++;
      }

      return caches[cacheCount];
    }

    try {
      resolve(callback(awaitFunc));
    } catch { }

  })
}

// ------------instanceof-----------------
function InstanceOf(obj, constructor) {
  if (typeof constructor !== 'function') {
    throw new Error("Uncaught TypeError: Right-hand side of 'instanceof' is invalid")
  }

  if (typeof obj !== 'object' || obj === null) return false;

  if (obj.__proto__ === constructor.prototype) return true;
  else if (obj.__proto__ !== undefined) {
    return InstanceOf(obj.__proto__, constructor);
  } else {
    return false;
  }
}

// -------------new-------------------
function MyNew(myClass, ...argus) {
  const obj = {};
  myClass.call(obj, ...argus);
  obj.__proto__ = myClass.prototype
  return obj;
}