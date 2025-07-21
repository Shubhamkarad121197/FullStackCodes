
var str2 = "She sells seashells by the sea-shore";
console.log( str2.indexOf("sea") );
console.log( str2.lastIndexOf("sea") );
console.log( str2.indexOf("time") );



var str = "Hey how are you doing";


console.log( str.indexOf("the") ); //-1


console.log( str.lastIndexOf("do") ); //16


console.log( str.indexOf(" ") ); //3

//Substring


let str1 = "Sun, Moon, Sky, Stars, Galaxy";
console.log( str1.substring(5, 9) );


//Concat


var str = "Hello ";
var name = "Steve";
var res = str.concat(name, "! ", "How are you?");


console.log(res);
console.log( "".concat("My name is ", name) );



