// function hihi(a,b){
//   var result;
//   a>b ? result = ["c",a]: result = ["d",b];
//   return result;
// }
//
//  var  c = 3/4, d = 5/7;
// // hihi(c,d);
// // hihi (3,1);
// // console.log(hihi(5,1));
// var fraction = hihi(c,d);
// console.log("First fraction result: ",c);
// console.log("second fraction result: ",d);
// console.log("fraction "+ fraction[0]+" with the value of "+ fraction[1]+ " is the biggest");
//

// Anonymous functions
// var c  = 5;
// var d = 18/25;
// var theBiggest = (function(a,b){
//   var result;
//   c++;
//   a>b ? result = ["a",a]:result = ["b",b];
//   return result;
// })(c,d)

//
// theBiggest;
// console.log(c);

//variable scope

//constant variable

//const MYCONSTANT = 5;
// console.log(MYCONSTANT);
// MYCONSTANT = 6;

//Let variable
// function logScope(){
//   var localVar = 2;
//   if(localVar){
//     var localVar = "Im different!";
//     console.log("nested localVar: ",localVar);
//   }
//   console.log("logScope localVar: ",localVar);
// }
// logScope();
//
// const MYCONSTANT = 5;
// console.log(MYCONSTANT);
// function logScope(){
//   let localVar = 2;
//   if(localVar){
//     let localVar = "I'm different!";
//     console.log("nested localVar", localVar);
//   }
//   console.log("logScope localVar",localVar);
// }
//
// logScope();
//object
// var course =  new Object();
// course.title ="hiihi";
// course.instructor = "hoho";

// var course = {
//   title: "javascript essential training",
//   instructor : "Morten Rand-Hendriksen",
//   level : 1,
//   published: true,
//   view:0,
//   updateViews: function(){
//     return ++course.view;
//   }
// }
// console.log(course);
//
// var currentDate = new Date();
//
// var course02 = new Course();

// function Course(title,instructor,level,published,views){
//   this.title = title;
//   this.instructor = instructor;
//   this.level = level;
//   this.published = published;
//   this.views = views;
//   this.updateViews = function(){
//     return ++this.views;
//   };
// }
// var courses = [
//    new  Course("javascript essential training","Morten Rand-Hendreiksen",1,true,0),
//    new Course("hihi","hoho",1,true,123456)
// ]
//
//
// console.log(courses[1].instructor);

//closures
 // function dosomemath(){
 //   var a = 5;
 //   var b = 4;
 //   function multiply(){
 //     var result = a*b;
 //     return result;
 //   }
 //   return multiply;
 // }
 // var thresult = dosomemath();
 // console.log("The result: ", thresult);

//  function giveMeEms(pixels){
//    var baseValue = 16;
//
//    function doTheMath(){
//      return pixels/baseValue;
//    }
//
//    return doTheMath();
//  }
//
//  var smallSize = giveMeEms(12);
//  var mediumSize = giveMeEms(18);
//  var largeSize = giveMeEms(24);
//  var Exlargesize = giveMeEms(32);
//
// console.log("Small size:", smallSize);
// console.log("Medium size:", mediumSize);
// console.log("Large size:", largeSize);
// console.log("Extra Large size:", Exlargesize);

var a ="1";
var c ="2";
var b = "3";
console.log(a);
