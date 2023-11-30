//bài 1
function findSmallestInt() {
    let n = 1;
    let sum = 0;

    while (true) {
      sum += n;
      if (sum > 10000) {
        break;
      }
      n++;
    }

    document.getElementById("result").textContent = "Số nguyên dương nhỏ nhất lớn hơn 10000 là: " + n;
}
document.getElementById("btn-bai1").onclick = findSmallestInt;

// bài2
function calculateSum() {
  var x = parseFloat(document.getElementById("x").value);
  var n = parseInt(document.getElementById("n").value);

  var sum = 0;
  for (var i = 0; i <= n; i++) {
      sum += Math.pow(x, i);
  }

  document.getElementById("result-1").innerHTML = 'Tổng là: ' + sum;
}
document.getElementById("btn-bai2").onclick = calculateSum;

// bài3

function calculateFactorial() {
  var num = document.getElementById('num').value;
  var result = factorial(num);
  document.getElementById('result-3').innerHTML = "Giai thừa của " + num + " là " + result;
}

function factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
      result *= i;
  }
  return result;
}
document.getElementById("btn-bai3").onclick = calculateFactorial;

// bài4
document.getElementById('btn-bai4').addEventListener('click', () => {
  const divContainer = document.getElementById('divContainer');

  for (let i = 0; i < 10; i++) {
      const newDiv = document.createElement('div');
      newDiv.style.marginBottom = '5px';

      if (i % 2 === 0) {
          newDiv.style.backgroundColor = 'blue';
      } else {
          newDiv.style.backgroundColor = 'red';
      }
      newDiv.textContent = `Div ${i + 1}`;
      divContainer.appendChild(newDiv);
  }
});

// bài5
function printPrimes() {
  let num = document.getElementById('number').value;
  let primeNums = getPrimes(num);
  document.getElementById('result-4').innerHTML ='Các số nguyên tố là: ' + primeNums.join(', ');
}

function getPrimes(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
          primes.push(i);
      }
  }
  return primes;
}

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return num > 1;
}
document.getElementById("btn-bai5").onclick = printPrimes;