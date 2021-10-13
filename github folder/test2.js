<script>
  /** hof example */
var add = add => add+1;
function testAdd(fn,x){
return fn(x);
}
var ot = testAdd(add,5);
console.log(ot); 

/**callback unction example */
function display(some){
console.log(some);
}

function testAdd(n1,n2,callback){
var output=n1+n2;
callback(output);
}
 testAdd(5,5,display);

 /**simple switch statement */

 var a = 5;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
 console.log(test)

  </script>
