<script>
var add = add => add+1;
function testAdd(fn,x){
return fn(x);
}
var ot = testAdd(add,5);
console.log(ot); 

alert(ot);
  </script>
