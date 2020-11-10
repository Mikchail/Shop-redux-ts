
interface Extend  {
  a: object;
  b: object;
}
export const  extend = (a:object, b:object): object => {
  return Object.assign({}, a, b);
};