function add(a, b){
  return a+b; 
}


function subtract(a,b){
  return a-b; 
}

var a = [1,3,5]; 
var b = [2,4,6]; 

function mergeSorted(a,b){
  var n = Math.max(a.length, b.length); 
  var temp = []; 
  
  while(a.length && b.length>0){
    if(a[0]<b[0]){
      temp.push(a.shift())
    }
    else {
      temp.push(b.shift());
    }
  }
  
  if(a.length>0){
    temp.push(...a); 
  }
  
  if(b.length>0){
    temp.push(...b); 
  }
  return temp; 

}


function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}
console.log(sum(2)(3));



function x(){
  console.log("hello")  
}


obj = {
  method: function(fn){
    console.log(fn)
  }
}

obj.method(x)


var length = 10;
function y() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    console.log(fn)
    fn();
    console.log("args", arguments)
    console.log("Array args", Array.from(arguments))
    console.log(arguments[0])
    arguments[0]();
  }
};


obj.method(y, 1);



