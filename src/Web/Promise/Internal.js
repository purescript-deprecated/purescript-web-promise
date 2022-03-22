export function new(k) {
  return new Promise(k);
}

export function then_(k, p) {
  return p.then(k);
}

export function catch(k, p) {
  return p.catch(k);
}

export function finally(k, p) {
  return p.finally(k);
}

export function resolve(a) {
  return Promise.resolve(a);
}

export function reject(a) {
  return Promise.reject(a);
}

export function all(a) {
  return Promise.all(a);
}

export function race(a) {
  return Promise.race(a);
}
