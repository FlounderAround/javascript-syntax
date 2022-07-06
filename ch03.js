//FIFO

var score = prompt('점수를 입력하세요');

if(score >= 80){
    alert('합격');
}else if(score >= 50){
    alert('평균');
}else{
    alert('불합격');
}

var test1 = 10 >5;
var test2 = 10 < 5;

//논리곱연산자, 모두 참이어야 참
console.log(test1 && test2);
//논리합연산자, 하나만 참이어도 참
console.log(test1 || test2);
//부정연산자
console.log(!test1);

var excel = prompt('엑셀');
var access = prompt('엑세스');

if(excel >= 70 && access >= 70){
    alert(합격);
}else{
    alert(불합격);
}

var ID = prompt('주민번호 뒷자리의 첫글자');
if(ID == 1 || ID == 3){
    alert('남자');
}else if(ID ==2 || ID == 4){
    alert('여자');
}else{
    alert('1~4 사이로 입력하세요');
}

//확인버튼을 누르면 true, 취소버튼을 누르면 false
var choice = confirm('결제하시겠습니까?')
if(!choice){
    alert('취소되었습니다.');
}

var score = prompt('점수를 입력하세요');
if(score < 0 || score > 100){
    alert('0~100사이 정수로 입력하세요');
}else{
    if(score >= 80){
        alert('합격');
    }else{
        alert('불합격');
    }
}

var num = prompt('정수를 입력하세요');

if(num % 2 == 0){
    alert('짝수');
}else if(num % 2 == 1){
    alert('홀수');
}else{
    alert('정수를 입력하세요');
}
