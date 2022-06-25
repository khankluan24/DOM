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

