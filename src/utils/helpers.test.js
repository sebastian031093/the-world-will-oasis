import helloFromUtils from './helpers';

test('display message from funtion', () => {
  expect(helloFromUtils('sebas')).toBe('Hello from utils funtion.. sebas');
});
