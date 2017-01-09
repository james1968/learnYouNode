function babySteps() {

var array = (process.argv).slice(2).map(Number);
for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
console.log(sum);
}

babySteps();