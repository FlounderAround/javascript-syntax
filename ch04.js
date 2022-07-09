var ID = prompt('주민번호 뒷자리의 첫글자');
switch (ID) {
  case '1':
    alert('남자');
    break;
  case '2':
    alert('여자');
    break;
  case '3':
    alert('남자');
    break;
  case '4':
    alert('여자');
    break;
  default:
    alert('1~4 사이의 정수를 입력하여 주세요');
}

//요일은 0~6사이의 인덱스 번호로 반환
var day = new Date().getDay();

alert('오늘 : ' + day);

switch (day) {
  case 0:
    day = '일요일';
    break;
  case 1:
    day = '월요일';
    break;
  case 2:
    day = '화요일';
    break;
  case 3:
    day = '수요일';
    break;
  case 4:
    day = '목요일';
    break;
  case 5:
    day = '금요일';
    break;
  case 6:
    day = '토요일';
    break;
}

//삼항연산자 = 조건식 ? 참표현식:거짓표현식

var score = prompt('정수를 입력');

score >= 80 ? alert('합격') : alert('불합격');

//짧은 조건문 = 조건식&&참표현식 or 조건식||거짓조건식

var q = confirm('결제하시겠습니까?');

q || alert('취소되었습니다');

var now = new Date().getDay();

switch (now) {
  case 0:
  case 6:
    alert('주말특가');
    break;
  case 5:
    alert('금요일특가');
    break;
  default:
    alert('평일특가');
    break;
}
