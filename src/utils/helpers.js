export function helloFromUtils(message = '') {
  console.log(`Hello from utils funtion.. ${message}`);
  const messageFunction = `Hello from utils funtion.. ${message}`;
  return messageFunction;
}

export function ohtherHi() {
  console.log('other Hi....');
}
