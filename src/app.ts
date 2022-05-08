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

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
//using generic types lets typescript know the data types can and often will be different

const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30} );

console.log(mergedObj);

interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if(element.length === 1){
    descriptionText = 'Got 1 element';
  } else if (element.length > 1){
    descriptionText = 'Got ' + element.length + ' elements.'
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports']));



