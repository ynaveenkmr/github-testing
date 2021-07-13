<script>
var add = add => add+1;
function testAdd(fn,x){
return fn(x);
}
var ot = testAdd(add,5);
console.log(ot); 

/**Another function example */
function display(some){
console.log(some);
}

function testAdd(n1,n2,callback){
var output=n1+n2;
callback(output);
}
 testAdd(5,5,display);
 
 /**Take update one */

alert('ok');
 function testfun1(num1, num2){
   return num1+num1;
 }


  </script>
