// const names: Array<string> = []; // same as string[]
// names[0].split(' ');
// better type saftey with generic type
// Array knows what type of data it stores
// Promise knows what type of data it returns

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(100)
//   }, 2000)
// });

// promise.then(data => {
  // data.split(' ')
// })

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
//using generic types lets typescript know the data types can and often will be different

const mergedObj = merge({name: 'Max'}, {age: 30});
console.log(mergedObj.age);
