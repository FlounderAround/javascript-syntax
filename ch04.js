var ID = prompt('주민번호 뒷자리의 첫글자');
switch(ID){
    case '1' :
        alert('남자');
        break;
    case '2' :
        alert('여자');
        break;
    case '3' :
        alert('남자');
        break;
    case '4' :
        alert('여자');
        break;
    default:
        alert('1~4 사이의 정수를 입력하여 주세요')
}


//요일은 0~6사이의 인덱스 번호로 반환
var day = new Date().getDay();

alert('오늘 : '+day);

switch(day){
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
