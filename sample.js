// function scope_test01(x) {
//   return x + 6;
// }

// console.log(scope_test01(1));

function fn() {
  const x = 1;  
  console.log(x);
};

fn();

function num() {
  let num = 10
  console.log(num);
}
num();