// 1. IIFE
/**
 * IIFE == Self-invoking function
 const app = (function() {
     // Private giong OOP
     let cars = [];
     return {
         get(index) {
             return cars[index];
         },
         add(car) {
             cars.push(car)
         },
         edit(index, car) {
              cars[index] = car
         },
         delete(index) {
             cars.splice(index, 1)
         }
     }
 }())
 */


// 2. Scope
/**
  - Biến trong func đc tham chiếu bởi 1 func khác 
  function logger() {
      let counter = 0;
      function increase() {
          return ++counter;
      }
      return increase;
  }
  const logger1 = logger();
  console.log(logger1()); //1
  console.log(logger1()); //2 
  console.log(logger1()); //3
 * 
 */

// 3. Closure 
/**
 function createCounter() {
     let counter = 0;
     function increase() {
         return ++counter;
     }
     return increase;
 }
 const counter1 = createCounter();
 console.log(counter1()); //1
 console.log(counter1()); //2



 function createLogger(namespace) {
     function logger(message) {
         console.log(`[${namespace}] ${message}`)
     }
     return logger
 }
 
 // Register.js 
 const infoLogger = createLogger('Info')
 
 infoLogger('Bat dau goi mail');
 infoLogger('Triển khai gởi mail tiếp theo');
 
 // ForgotPassword.js 
 const errorLogger = createLogger('Error')
 
 errorLogger('Bat dau goi mail');
 errorLogger('Triển khai gởi mail tiếp theo');
 
 function createApp() {
     const cars = [];
 
     return {
         add(car) {
             cars.push(car);
         },
         show() {
             console.log(cars)
         }
     }
 }
 const app = createApp()
 */

// 4. Hoisting
/**
 const counter1 = makeCounter()
 console.log(counter1()) // 1 Do declaration func đc hoist lên đầu
 function makeCounter() {
     let counter = 0
     return increase
     function increase() {
         return ++counter
     }
 }
 */

// 5. Strict mode
/**
 'use strict';
 const student = {}
 Object.defineProperty(student,'fullName',{
     value: 'long',
     writable: false
 })
 student.fullName = 'ha pro'
 console.log(student.fullName)
 * 
 */
let a = 3;
let b = a;
console.log(b)
const bc = {

}
let long ={...bc}