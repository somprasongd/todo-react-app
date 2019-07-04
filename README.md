# Todo React App

**Update date:** 02 July 2019

การเขียน Web โดยใช้ React version 16.8.6

## Table of Contents

### # [Development Tools](https://github.com/somprasongd/todo-react-app#development-tools)

### # [ES6 Refresher](https://github.com/somprasongd/todo-react-app#es6-refresher)

### # [Concepts](https://github.com/somprasongd/todo-react-app/tree/0-concepts)

### # [JSX](https://github.com/somprasongd/todo-react-app/tree/1-jsx)

### # [Handling Events](https://github.com/somprasongd/todo-react-app/tree/2-events)

### # [Components](https://github.com/somprasongd/todo-react-app/tree/3-components)

### # [Lifecycle](https://github.com/somprasongd/todo-react-app/tree/4-lifecycle)

### # [HTTP Requests](https://github.com/somprasongd/todo-react-app/tree/5-http-requests)

### # [Router](https://github.com/somprasongd/todo-react-app/tree/6-router)

### # [Context API](https://github.com/somprasongd/todo-react-app/tree/7-context)

### # [Hooks](https://github.com/somprasongd/todo-react-app/tree/8-hooks)

### # [Delpoyment](https://github.com/somprasongd/todo-react-app/tree/9-deploy)

## Development Tools

- ติดตั้ง Nodejs version 10.16
- ติดตั้ง create-react-app cli `npm i -g create-react-app@3.0.1`
- ติดตั้ง VS Code และลง Extensions
  - ES7 React/Redux/GraphQL/React-Native snippets
  - Prettier
  - Bracket Pair Colorizer
- ติดตั้ง Google Chrome Extensions
  - React Developer Tools
  - Redux DevTools

## ES6 Refresher

### 1. Let/Const

var เป็น function scope ส่วน let, const เป็น block scope ต่างที่ const เป็นค่าคงที่กำหนดค่าใหม่ได้ แต่ถ้าเป็น object จะสามารถเปลี่ยนแปลงค่าข้างใน object ได้

### 2. Objects

```js
// การสร้าง object ES6
const person = {
  name: 'Ball',
  talk() {} // ย่อ function
};
// การเรียกใช้งาน
person.talk();
person.name = '';
// หรือ
person['name'] = '';
```

### 3. The this Keyword

ใน JavaScript this จะมักมีปัญหาในการใช้งานอยู่เป็นประจำ เพราะว่าค่าของ this จะเปลี่ยนไปตามตัวที่เรียกมัน เช่น

```js
const person = {
  name: 'Ball',
  talk() {
    console.log(this);
  }
};
person.talk(); // {name: 'Ball', talk: f} เพราะ object เรียก function
const talk = person.talk;
talk(); // undefine เพราะ global object เป็นตัวเรียก
```

แก้โดยใช้การ binding

```js
const person = {
  name: 'Ball',
  talk() {
    console.log(this);
  }
};
person.talk();
// ใช้ bind เพื่อบอกว่าให้ใช้ person เป็นตัวเรียก function
const talk = person.talk.bind(person);
talk(); // {name: 'Ball', talk: f}
```

### 4. Arrow Functions

```js
const square = function(number) {
  return number * number;
};
// แปลงให้เป็น arrow function
const square = number => {
  return number * number;
};
// สามารถเขียนให้สั้นลงได้
const square = number => number * number;
// การนำไปใช้งานอื่นๆ
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];
// แบบปกติ
let activeJobs = jobs.filter(function(job) {
  return job.isActive;
});
// ถ้าใช้ arrow function จะสั้นลง และดูง่ายขึ้น
activeJobs = jobs.filter(job => job.isActive);
```

#### arrow function กับ this

```js
const person = {
  name: 'Ball',
  talk() {
    setTimeout(function() {
      console.log(this);
    }, 1000);
  }
};
person.talk(); // this จะได้ global object
// วิธีแก้แบบเดิมๆ
const person = {
  name: 'Ball',
  talk() {
    const self = this;
    setTimeout(function() {
      console.log(self);
    }, 1000);
  }
};
person.talk(); // this จะได้ person object
// วิธีแก้โดยใช้ arrow function
const person = {
  name: 'Ball',
  talk() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
};
person.talk(); // this จะได้ person object
// เพราะว่า arrow function จะสืบทอด this จะ function ที่ครอบมันอยู่ให้เอง
```

### 5. Array Method

- map() ใช้แปลง array ได้ array กลับมาจำนวนเท่าเดิม

```js
const colors = ['red', 'green', 'blue'];
const items = colors.map(color => '<li>' + color + '</li>');
// ใช้ template literal
const items = colors.map(color => `<li>${color}</li>`);
```

- filter() ใช้กรอง array ได้ array กลับจำนวนน้อยกว่าเดิม
- reduce() ใช้แปลง array ได้ออกมาเป็นค่าเดียว

### 6. Destructuring

- Object

```js
const address = {
  street: '',
  city: '',
  country: ''
};
// ถ้าต้องการถึงค่าใน object ออกมาจากเดิมทำแบบนี้
const street = address.street;
const city = address.city;
const country = address.country;
// ES6
const { street, city, country } = address;
// สามารถเปลี่ยนชื่อได้
const { street: st } = address;
```

- Array

```js
const colors = ['red', 'green', 'blue'];
const [red, green, blue] = colors;
```

### 7. Spread Operator

- Object

```js
const first = { name: 'Ball' };
const second = { city: 'Phuket' };
const combined = { ...first, ...second };
const clone = { ...first };
```

- Array

```js
const first = [1, 2, 3];
const second = [4, 5, 6];
// แบบเดิม
const combined = first.concat(second);
// ES6
const combined = [...first, ...second];
// สามารถเพิ่ม element ตรงไหนก็ได้
const combined = [...first, 9, ...second, 10];
// หรือใช้ clone array ก็ได้
const clone = [...first];
```

### 8. Classes

```js
// เดิมถ้าต้องการสร้าง 2 object
const person = {
  name: 'Ball',
  talk() {
    console.log('talk');
  }
};
const person2 = {
  name: 'Pu',
  talk() {
    console.log('talk');
  }
};
// ES6 สามารถสร้าง class เป็นเหมือน blueprint ไว้ได้
class Person {
  constructor(name) {
    this.name = name;
  }
  talk() {
    console.log('talk');
  }
}
const person = new Person('Ball');
const person2 = new Person('Pu');
```

#### Inheritance

```js
class Person {
  constructor(name) {
    this.name = name;
  }
talk() {
    console.log('talk');
  }
}
// ถ้าสร้าง class ใหม่แต่อยากได้คุณสมบัติของ Person ด้วย
class Employee extend Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  work() {
    console.log('work');
  }
}
const employee = new Employee('Stamp', 'Dev');
employee.talk();
```

### 9. Modules

บางทีเขียนโค้ดในไฟล์ๆ เดียวแล้วมันดูแลยาก เราเลยอยากแยกออกไปอีกไฟล์ทำได้โดยสร้างเป็น module

#### person.js

```js
// ใช้ export เพื่อให้ไฟล์อื่นเรียกใช้งานได้
export class Person {
  constructor(name) {
    this.name = name;
  }
  talk() {
    console.log('talk');
  }
}
```

#### employee.js

```js
// จะใช้งานไฟล์ไหน ต้อง import มาก่อน
import { Person } from './person';
export class Employee extend Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  work() {
    console.log('work');
  }
}
```

#### index.js

```js
import { Employee } from './employee';
const employee = new Employee('Stamp', 'Dev');
employee.talk();
```

### Named & Default Exports

```js
// employee.js
import { Person } from './person';
export function promote() {}
export class Employee extend Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  work() {
    console.log('work');
  }
}

// index.js
import {Employee, promote} from './employee';
// แต่ถ้าต้องการใช้ class Employee แต่ default ทำได้โดย

// employee.js
import { Person } from './person';
export function promote() {}
export default class Employee extend Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  work() {
    console.log('work');
  }
}

// index.js ต้องเปลี่ยนวิธี import
import Employee, {promote} from './employee';

// สรุป
// Default -> import ... from '';
// Named -> import { ... } from '';

```

**เรื่องถัดไป** [JSX](https://github.com/somprasongd/todo-react-app/tree/1-jsx)
