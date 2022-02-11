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
