function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This will work correctly

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, 0);
    })(i);
  }
}

printNumbers2(5);

function printNumbers3(n: number): void {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        console.log(i);
      }, 0);
    }
  }
  
printNumbers3(5); //This will print 1,2,3,4,5 because of let keyword