alert("common");

alert("자바스크립트");
//주석처리 3

//1. 경고창에 출력
alert('안녕하세요!');

//2. 문서(body)에 출력
document.write('안녕하세요!');

//3. 콘솔창에 출력
console.log('안녕하세요!');

//숫자
document.write(100);
document.write('100');

//문자열
document.write('문자열');
document.write("문자열");
//태그 인식 시 문자열 안에 문자열을 인식하기 위해 ''와 "" 둘 다 사용
document.write('<a href="#">링크태그</a>');

//불린
document.write(10 > 5);
document.write(true);
document.write('true'); //--> 문자열
//키워드: 자바스크립트가 특별한 의미를 담고 있는 예약어로 따옴표 내부에서 사용하지 않음

//함수: 코드의 집합
prompt();

//객체: JS가 명령 가능한 모든 대상
//document --> body 문서 객체
document.write(document);

//undefined: 변수에 값을 할당하지 않은 상태
var test;

document.write(test);

console.log(10 + 5);
console.log(10 - 5);
console.log(10 / 5);
console.log(10 % 3);

//처리 가능
console.log(10 - '3');
//1010
console.log(10  + '10');
console.log(1000+'원');

// <, >, >=, <=, ==, !=
console.log(10 == 5);
//완전항등연산자: 데이터 유형이 같아야 true
console.log(10 === '10');

//변수 선언
var num1;
//값 할당
num1 = 10;

//선언과 동시에 초기화
var num2 = 100;

document.write(num1);

//동시선언
var str1, str2, str3;
str1='a';
str2='b';
str3='c';

//식별자: 영어 대소문자 구분, 숫자는 영문 뒤에 사용, 특수문자는 _ 또는 $만 사용, 공백 사용 X, 키워드는 식별자로 사용하지 않는다.