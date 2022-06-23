// var array = ['a','b','c','a','b','c'];
// console.log([...new Set(array)]);
//Chạy ra output của mảng mà ko dùng hàm hay vòng lặp

// const { response } = require("express");

/**
 * Đệ quy
 * 1. Xác định điểm dừng
 * 2. Logic handle => Tạo ra điểm dừng
 */

// function deQuy(num) {
//     if (num <0) {
//         //Dừng,Điểm dừng của đệ quy là điểm mà ko gọi lại nó
//         return
//     }
//      deQuy(); //

// }

// deQuy(); //Maximum call stack ==> Lặp 1 lỗi vô hạn

// Tạo ứng dụng countdonw đếm ngược từ 10
// function countDown (num) {
//      if( num>0) {
//          console.log(num);
//          return countDown(num - 1);
//      }
//      return num;
// }
// countDown(5);

// /* 
// function loop(start, end, cb) {
//   if (start <= end) {
//     cb(start)
//     return loop(start + 1, end, cb);
//   }
// }

// var array = ['JS', 'Php', 'Ruby'];
// loop(0, array.length, function(index) {
//   console.log('index: ', index)
// }) */

// //Tính giai thừa của 3
// function giaiThua(num) {
//     /*  var output = 1;
//      for (var i=num; i>0; i--) {
//          output = output *i;
//      }
//      return output; */
//     // Đệ quy
//     if (num > 0) {
//       return num * giaiThua(num - 1);
//     }
//     return 1;
//   }

//   console.log(giaiThua(3))
/** Callback
 *  
 *  Là hàm được truyền qua đối số. được gọi lại (trong hàm nhận đối số)
 * 
 * */


// function myFunction (param) {
//     console.log(typeof param);
// }

// function myCallBack (value) {
//      console.log('Value: ', value);
// }

// myFunction(myCallBack); //function

// myFunction(123); // number ==> truyền gì qua đối số ở đây thì param trên sẽ nhận cái đó

// myCallBack(123); //Value:  123

// function myFunction (param) {
//     param('Học lập trình');
// }

// function myCallBack (value) {
//      console.log('Value: ', value);
// }

// myFunction(myCallBack); //Value:  Học lập trình


/**
 * Callback phần 2
 */

// Array.prototype.map2 = function() {
//     let arrayLength = this.length;

//     for (var i = 0; i < arrayLength; ++i) {

//     }
// }

// var courses = [
//     'Js',
//     'PHP',
//     'Ruby'
// ]

// courses.map2();


//forEach, find ,filter, some ,every, reduce

// từ forEach đến every nhận đối số 1 là callbackfn, đối số 2 là 
// thisArg

//forEach

// courses.forEach(function(a,b,c) {
//      console.log(a,b,c);
// }
// ) ;

// nếu khai báo var output bằng forEach sẽ trả undefined

// //Tạo forEach2
// Array.prototype.forEach2 = function (callback) {
//      for (var index in this) {//for in duyệt cả element nằm trong array và trong prototype
//         //   console.log('index: ', index); //index: 0, index: 1,.. và cả index: forEach2
//        // Do t/chất array constructor biến đối tượng được khởi tạo thừa hưởng từ các phương thức
//        //courses và forEach2 ==> courses cũng thừa hưởng key forEach2 từ array prototype
//              console.log(index, this.hasOwnProperty(index)) //0,1,2 đều true còn forEach2 là false ko nằm trong
//              // phần tử = phương thức gần nhất mà trong proto

//     }
// }
// console.log(courses)
// courses.forEach2(function(a,b,c) {
//     console.log(a,b,c);
// }
// ) ;
// btvn: ôn lại object proto, for in và hasOwnProperty

// const courses = [
//     {
//         name: 'JS',
//         coin: 680
//     },
//     {
//         name: 'React JS',
//         coin: 780

//     },
//     {
//         name: 'Python',
//         coin: 980
//     }
// ]

// var filterCourses = courses.filter(function(course,index,array){
//     return course.coin > 700;
// });

// console.log(filterCourses);
/**
 * 0: {name: 'React JS', coin: 780}
    1: {name: 'Python', coin: 980}
 */


/**
 * HTML DOM
 * 
 * DOM là document object model
 * 
 * DOM có 3 thành phần: 
 * 1. Element: Là thẻ tag như h1,a, head,...
 * 2. Attribute: Là các thuộc tính như: class,id,href,src,...
 * 3. Text
 */

// Node là 1 điểm giao nhau có thể là 1 trong 3thành phần của DOM

// 2.  DOM API
// Là bộ API nằm trong Web API có mặt trên những môi trường hỗ trợ duyệt web - như trên trình duyệt.
//  DOM API cung cấp các đối tượng và phương thức hỗ trợ truy xuất, chỉnh sửa các đối tượng / thành phần trong DOM

// browser HTMl --> DOM --> WEB API






// const fruitList = ['apple', 'banana', 'tomato' ];
// const ulElement = document.querySelector('ul');
// fruitList.forEach(function (fruit) {
//       const liElement = document.createElement('li');
//       liElement.innerHTML = fruit;
//       ulElement.appendChild(liElement);
// })

// const imageSrc = 'https://crocoder.dev/icon.png';
// const newImage = document.createElement('img');
// newImage.src = imageSrc
// document.querySelector('div').appendChild(newImage)

// const fitem = document.querySelectorAll('li:first-child');
// const litem = document.querySelectorAll('li:last-child');
// fitem.forEach(function (item) {
//       item.innerText = 'first' 
// })
// litem.forEach(function (item) {
//       item.innerText = 'last' 
// })

// const pElement = document.getElementsByTagName('p');
// function set_background() {
//       for (var index in pElement) {
//             pElement[index].style.backgroundColor = '#545454'
//       }
      // var style = document.createElement('style');
      // style.innerHTML = `
      // p {
      //       background-color: #545454
      // }
      // `;
      // document.head.appendChild(style);
// }






//                    JSON JSON JSON  JSON JSON JSON JSON JSON JSON JSON JSON JSON JSON

// 1. Là 1 format dữ liệu (chuỗi). Dạng num trong JSON ko cần dấu nháy kép
// ****function ko thể hiện 
// 2. Javascript Object Notation
// 3. JSON: String, Number, Boolean, null, Array, Object

// stringify: Từ JS thành JSON
// Parse: Từ JSON thành JS
// console.log(JSON.stringify([
//    'J"S', // "" trong JSon được hiểu là dấu \
//    'PHP',
//    {
//       name: 'Long',
//       age: 21,
//       test: function() {}
//    }
// ]))

//              Promise Promise Promise Promise Promise Promise Promise Promise Promise
// - Sync: Đồng bộ
// - Async: Bất Đồng bộ
// - Pain
// - Lý thuyết: Là khái niệm được sinh ra để xử lý bất đồng bộ. Trc khi có promise. thì sẽ dùng
// callBack và callBack sẽ xảy ra callBack Hell rất khó hiểu. Và promise sinh ra từ ES6,để giải
// quyết callBack Hell không bị xâu vào, đọc dễ hiểu hơn
// - Cách hoạt động: Tạo từ khóa new với Promise. Tạo 1 function Executor với 2 tham số dạng hàm 
// là resolve(khi thao tác thành công) và reject(khi thao tác thất bại) 
// then và catch đều nhận các callBack function. Then sẽ lọt vào resolve, catch sẽ lọt vào reject

// - Thực hành
// setTimeout, setInterval, fetch, XMLHttpRequest, file reading, requestAnimationFrame

//callBack hell

// Pyramid of doom 

// Pain
// setTimeout(function () {
//       console.log(1); //viec 1
//       setTimeout(function () {
//             console.log(2); //viec 2
//             setTimeout(function () {
//                   console.log(3); //viec 3
//                   setTimeout(function () {
//                         console.log(4); //viec 4
//                         setTimeout(function () {
//                               console.log(5); //viec 5
//                         }, 1000);
//                   }, 1000);
//             }, 1000);
//       }, 1000);
// }, 1000)

// 1. Pending
// 2. fulfilled
// 3. reject
// var promise = new Promise ( // la 1 object constructor
//       //Executor
//       function(resolve, reject) {
//             // Logic
//             // Thành công: resolve()
//             // Thất bại: reject()

//             // Fake Call API
//             reject('Có lỗi');
//       }
// //
// ) ;
// promise
//       .then(function() {
//             console.log('Successfully!')
//       })
//       .catch(function(error) {
//             console.log(error)
//       })
//       .finally(function() {
//             console.log('Done!')
//       });

// Chain
// function sleep (ms) {
//       return new Promise(function (resolve) {
//             setTimeout(resolve, ms)
//       });
// };

// sleep(1000)
//       .then(function () {
//             console.log(1);
//             return sleep(1000);
//       })
//       .then(function () {
//             console.log(2);
//             return new Promise(function (resolve,reject) {
//                   reject('Co loi!');
//             });
//       })
//       .then(function () {
//             console.log(3);
//             return sleep(1000);
//       })
//       .catch(function (err) {
//             console.log(err)
//       })

// 1. Promise.resolve
// let promise = Promise.resolve('Success !');
// 2. Promise.reject
// let promise = Promise.reject('Error !');
// // 3. Promise.all
// let promise1 = new Promise(function(resolve) {
//       setTimeout(function() {
//             resolve([1]);
//       }, 2000);
// });

  
//   let promise = job();
  
//   promise
  
//   .then(function() {
//       console.log('Success 1');
//   })
  
//   .then(function() {
//       console.log('Success 2');
//   })
  
//   .then(function() {
//       console.log('Success 3');
//   })
  
//   .catch(function() {
//       console.log('Error 1');
//   })
  
//   .then(function() {
//       console.log('Success 4');
//   });

// let promise2 = new Promise(function(resolve) {
//       setTimeout(function() {
//             resolve([2,3]);
//       }, 5000);
// });
// // ==> Nếu chạy nối đuôi nhau sẽ mất 7s

// Promise.all([promise1, promise2])
//       .then(function(result) {
//             var result1 = result[0];
//             var result2 = result[1];
//             console.log(result1.concat(result2)) 
//       })
//       .catch(function(err) {
//             console.log(err);
//       })

// // Thư viện: output luôn là 1 Promise


// promise
//       .then(function (result) {
//             console.log(`Result: ${result}`)
//       })
//       .catch(function (err) {
//             console.log(`Result: ${err}`)
//       });

// var users = [
//       {
//             id: 1,
//             name: 'long'
//       },
//       {
//             id: 2,
//             name: 'phat'
//       },
//       {
//             id: 3,
//             name: 'chuot'
//       },

// ];

// var comments = [
//       {
//             id: 1,
//             user_id: 1,
//             content: 'Chao may ku!'
//       },
//       {
//             id: 2,
//             user_id: 2,
//             content: 'Chao em!'
//       },
//       {
//             id: 3,
//             user_id: 1,
//             content: 'Ok'
//       },
// ];

// 1. Lay comment
// 2. Tu comment lay ra user_id,
// tu user_id lay ra user tuong ung

// Fake API

// function getComments() {
//       return new Promise( (resolve, reject) => {
//             setTimeout( () => {
//                   resolve(comments);
//             }, 1000);
//       });
// }

// function getUsersByIds (userIDs) {
//       return new Promise( resolve => {
//             var result = users.filter(user => userIDs.includes(user.id));
//             setTimeout( () => {
//                   resolve(result);
//             }, 1000);
//       }, 1000);
// }
// getComments()
// .then(comments => {
//       var userIDs = comments.map( comment => {
//             return comment.user_id;
//       });
      
//       return getUsersByIds(userIDs)
//             .then(users => {
//                   return {
//                         users: users,
//                         comments: comments,
//                   }
//             })
// })
// .then(data => {
//       var commentBlock = document.getElementById('comment-block');
//       var html = '';

//       data.comments.forEach(comment => {
//             var user = data.users.find(user => user.id === comment.user_id);
//             html += `<li>${user.name}: ${comment.content}</li>`;
//       });
//       commentBlock.innerHTML = html;
// })

/**                             Exercise Exercise Exercise Exercise Exercise Exercise Exercise
 * 
 function job(data) {
       return new Promise((resolve, reject) => {
             if (isNaN(data)) {
                   reject('error');
             }
             else if (data % 2 == 0) {
                   setTimeout(() => {
                         reject('even');
                   }, 2000);
             }
             else if (data % 2 != 0) {
                   setTimeout(() => {
                         resolve('odd');
                   }, 1000);
             }
 
       });
 }
 
 function job() {
       return new Promise(function(resolve, reject) {
           reject();
       });
   }
 */

//API: Aplication programming interface (URL) -> Cổng giao tiếp giữa các software


// Backend -> API (URL) -> Fetch -> JSON/XML
// -> JSON.parse -> JavaScript types 
// -> Render giao diện HTML


// var postApi = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postApi)
//       .then(response => {
//             return response.json();
//       })
//       .then(posts => {
//             var htmls = posts.map(post => {
//                   return `<li>
//                         <h2>${post.title}</h2>
//                         <p>${post.body}</p>
//                   </li>`;
//             });
//             var html = htmls.join('');
//             document.getElementById('post-block').innerHTML = html;
//       })
//       .catch(err => {
//             alert('Co loi');
//       })


// var courseAPI = 'http://localhost:3000/courses';
// fetch(courseAPI)
//       .then(respons => respons.json())
//       .then(courses => {
//             console.log(courses);
//       })

// - JSON server: API server (Fake) / Mock API

// - CRUD:
//    - Create: Tạo mới -> Post (method)
//    - Read: Lấy data -> Get
//    - Update: Chỉnh sửa -> Put / Patch
//    - Delete: Xóa -> Delete

// var courseApi = 'http://localhost:3000/courses';

// function start() {
//     getCourses(renderCourses);

//     handleCreateForm()
// }

// start();

// // Functions
// function getCourses(callback) {
//     fetch(courseApi)
//         .then((response) => response.json())
//         .then(callback);
// }

// function createCourse(data, callback) {
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     };
//     fetch(courseApi, options)
//         .then((response) => {response.json()})
//         .then(callback);
// }

// function handleDeleteCourse(id) {
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//     fetch(courseApi + '/' + id, options)
//         .then((response) => {response.json()})
//         .then(() => {
//             var courseItem =document.querySelector('.course-item-' +id);
//             if (courseItem) {courseItem.remove();}
//         });
// }

// function renderCourses(courses) {
//     var listCoursesBlock = document.getElementById('course-list');
//     var htmls = courses.map((course) => `
//         <li class="course-item-${course.id}">
//             <h4>${course.name}</h4>
//             <p>${course.description}</p>
//             <button onclick="handleDeleteCourse(${course.id})">Delete</button>
//         </li>
//     `);
//     listCoursesBlock.innerHTML = htmls.join('');
// }

// function handleCreateForm(e) {
//     var createBtn = document.getElementById('create');
//         createBtn.onclick = ((event) => {
//         // event.preventDefault();

//         var name = document.querySelector('input[name="name"]');
//         var description = document.querySelector('input[name="description"]');

//         var formData =  {
//             name: name,
//             description: description
//         };

//         createCourse(formData, (() => {
//             getCourses(renderCourses);

//         }));
//     });
// }

/**
 1. Let, const
 a) Var / Let, const: Scope, Hoisting
 b) Const/ Var, let: Assignment
 
 Code block: if else, loop, {}, ...
 Code thuần: var
 Thư viện Babel: const, let
  Khi đ/ nghĩa biến và không gán lại: Const
  Khi cần gán lại giá trị cho biến dùng let
 */

/**
 2. Arrow function
 Arrow function không dùng được trong constructor
 const course = {
     name: 'JavaScript Basic',
     getName: function() {
         return this; //context
     }
 };
 console.log(course.getName());
 */

/**
 3. Class
 function Course(name, price) {
     this.name = name;
     this.price = price;
 }
 
 
 class Course{
     constructor(name, price) {
         this.name = name;
         this.price = price;
 
     }
     getName() {
         return this.name;
     }
     getPrice() {
         return this.price;
     }
 }
 */

/**
 4. Default paramenter values
 function logger(log, type ='log') {
     console[type](log);
 }
 logger('Message...','warn');
 */

/**
 * 5. Enhanced object literals
    a) Định nghĩa key value cho object
    b) Định nghĩa method cho object
 var name = 'JavaScript';
 var price = 1000;
 var course = {
     name,
     price,
     getName: (() => name),
 };
 console.log(course.getName());
    c) Định nghĩa key cho object dưới dạng biến
var fieldName = 'name';
var fieldPrice = 'price';
const course = {
    [fieldName]: 'JavaScript',
    [fieldPrice]: 1000,
}
console.log(course);
 */

/**
 6. Destructuring && Rest paramenter(kết hợp với sử dụng Destructuring khi đ/nghĩa tham số)
 * 
 var array = ['JS', 'Php', 'Ruby'];
  var a = array[0];
  var b = array[1];
  var c = array[2];
 var [a,...l] = array;
 console.log(a);  JS
 console.log(l); // ['Php', 'Ruby']
 var course = {
     name: 'javascript',
     price: 1000,
     children: {
         name: 'ReactJS'
     }
 }
 var {name: parentName, children:{name}} = course; //parentName de ko trung name 1
 console.log(name);
 
 function logger(...params) {
     console.log(params);
 }
 console.log(logger(1,2,3,4,5)); // [1, 2, 3, 4, 5]
 */

 /**
  7. Spread: Sử dụng khi truyền đối số
  *** Object
  function logger({name, price, ...rest }) {
    console.log(name); //javascript
    console.log(price); // 1000
    console.log(rest)//{description: 'description content'}
}
logger({
    name: 'javascript',
    price: 1000,
    description: 'description content'
});
***var object1 = {
    name: 'javascript'
    };
    var object2 = {
    price: 1000
    };
    var object3= {...object1, ...object2}; //{name: 'javascript', price: 1000}
    console.log(object3);

var defaultConfig = {
    api: 'https://fullstack.edu.vn/',
    apiVersion: 'v1'
};
var exerciseConfig = {
    ...defaultConfig,
    api: 'https://google.com'
};
console.log(exerciseConfig); // {api: 'https://google.com', apiVersion: 'v1'}
  *** Array
  function logger([a, b, ...rest]) {
      console.log(a); //2
      console.log(b); // 6
      console.log(rest)//[4, 51, 23, 2]
  }
  logger([2,6,4,51,23,2]);

    *** var array = ['JS', 'Php', 'Ruby'];
  var array2 = ['ReactJS', 'Dart'];
  var array3 = [...array2,...array] //['ReactJS', 'Dart', 'JS', 'Php', 'Ruby']
  console.log(array3)
var array = ['javascript','Php', 'Ruby']
function logger(a,b , c,d) {
    console.log(a,b,c,d);
}
logger(...array); //javascript Php Ruby undefined
*/

/**
 * 8. Tagged template literals
 function highlight([first, ...strings],...values) {
     return values.reduce((acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
         [first]
     )
     .join('');
 }
 
 var brand = 'F8';
 var course = 'javascript'
 
 const html = highlight`Học lập trình ${course} tại ${brand}`;
 console.log(html);
 */

/**
 * 9. Modules
 import logger from './logger/logger.js'
 import  * as constant from './constant.js'
 console.log(constant); // 1 object Module {Symbol(Symbol.toStringTag): 'Module'}
 * 
 */
// const obj = { 
//     name: 'ALice',
//     cat: {
//         name: 'Dinah'
//     }
// }
// console.log(obj.cat.name)


