//배열
var nums = [1, 2, 3];

//전체호출
alert(nums);
//일부호출
alert(nums[0]);
alert(nums[0] +''+ nums[2]);

alert('nums length: ' + nums.length);

//배열과 for문
for (var i = 0; i < nums.length; i++){
    alert(nums[i]);
}

//for in문
for (var j in nums) {
    alert(nums[j]);
}

var output = '<select>';

var firstNum = ['010','011','016','017']

for (var k in firstNum){
    output += '<option>' + firstNum[k] + '</option>';
}

output += '</select>';
document.write(output);

//break
for (var l = 0; true; l++){
    var q = confirm('반복하시겠습니까?');

    if (q) {
        alert(l + '번째 반복');
    } else {
        break;
    }
}

//continue
for (var m = 1; m <= 10; m++){
    //3, 6, 9 일때 스킵
    if (m % 3 == 0) {
        continue;
    }
    alert(m);
}