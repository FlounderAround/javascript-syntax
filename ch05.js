//복합대입연산자
//a = a + 1;
//a += 1;

var num1 = 10;

num1 += 10;
console.log(num1);

num1 -= 10;
console.log(num1);

num1 *= 10;
console.log(num1);

num1 /= 10;
console.log(num1);

num1 %= 3;
console.log(num1);

// 숫자가 아닌 데이터 유형은 연결대입연산자

var korea = '대한';

korea += '민국';
console.log(korea);

var list = '<ul>';

list += '<li>리스트1</li>';
list += '<li>리스트2</li>';
list += '<li>리스트3</li>';

list += '</ul>';

document.write(list);

//증감연산자
var num2 = 10;

console.log(++num2);
console.log(num2++);
console.log(num2);

//while문
var num3 = 1;
while (num3 <= 10) {
  alert(num3);
  num3++;
}

//doWhile문
var num4 = 1;
do {
  alert(num4);

  num4++;
} while (num4 <= 10);

do {
  alert('do while문 실행');
} while (num4 > 20);

//for문
for (var i = 1; i <= 10; i++) {
  alert(i);
}

var month = '<select>';
for (var j = 1; j <= 12; j++) {
  month += '<option>' + j + '월</option>';
}
month += '</select>';
document.write(month);

//역 for문
for (var k = 10; k >= 0; k--) {
  alert(k);
}
console.log(k);

var year = '<select>';
for (var l = 2022; l >= 1900; l--) {
  year += '<option>' + l + '년</option>';
}
year += '</select>';

document.write(year);

//짝수만 출력
for (var m = 2; m <= 10; m += 2) {
  alert(m);
}

var output = '';
for (var n = 1; n <= 3; n++) {
  output += '=====' + n + '학년=====<br>';
  for (var o = 1; o <= 10; o++) {
    output += n + '학년 ' + o + '반<br>';
  }
}
document.write(output);

var multi = '';
for (var p = 1; p <= 9; p++){
    multi += '=====' + p + '단=====<br>';
    for (var q = 1; q <= 9; q++){
        multi += p + 'x' + q + '=' + p * q+'<br>';
    }
}

document.write(multi);
