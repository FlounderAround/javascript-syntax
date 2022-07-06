var bool1 = 10 > 5;

var fx = prompt('테스트', '테스트');
console.log(fx);

var obj = document;
console.log(obj);

//undefined
var test;

//재선언 X
// var cup = 'coffee';
// var cup = 'coke';
// var cup = 'greentea';

//재사용 O
var cup = 'coffee';
cup = 'coke';
cup = 'greentea';

var dollar = 1994;
var num = prompt('환전할 달러는>', '정수 입력');

alert("환전금액: "+(dollar * num));

var left = prompt('좌변입력', '정수');
var right = prompt('우변입력', '정수');

alert('결과: '+(Number(left) + Number(right)));

//값을 문자열로 변환 Number()

var korean = prompt('국어');
var english = prompt('영어');
var math = prompt('수학');

alert('평균: '+(Number(korean)+Number(english)+Number(math))/3);
