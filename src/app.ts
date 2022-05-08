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

console.log(countAndDescribe(['Sports', 'Cooking']));

// keyof tells typescript we want to ensure it only calls that type
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Max'}, 'name'));

class DataStorage<T extends string | number | boolean > {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if(this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Max')

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>()
// const maxObj = {name: 'Max'}
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj)
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}


//Partial turns it into an object type where all properties aree optional
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}