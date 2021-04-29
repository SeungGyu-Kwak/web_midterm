var now = new Date(); //현재 날짜 가져오기
var nowYear = now.getFullYear();
var wBirthDay = new Date(nowYear, 7-1, 10); 
var mBirthDay = new Date(nowYear, 9-1, 12);
var gap1 = now.getTime() - wBirthDay.getTime();
var gap2 = now.getTime() - mBirthDay.getTime();
var result1 = Math.floor(gap1 / (1000 * 60 * 60 * 24)) * -1;
var result2 = Math.floor(gap2 / (1000 * 60 * 60 * 24)) * -1;
var w_birthday = document.getElementById('w-birthday');
var m_birthday = document.getElementById('m-birthday');
w_birthday.innerHTML = "여자친구 생일까지 "+ '<font color = "red">'+ result1 + '</font>'+ "일 남았습니다.";
m_birthday.innerHTML = "남자친구 생일까지 " +'<font color = "red">'+ result2 + '</font>' +"일 남았습니다.";

var firstDay = new Date(2017,8-1,20);
var gap3 =firstDay.getTime() - now.getTime();
var result3 = Math.floor(gap3 / (1000 * 60 * 60 * 24)) * -1;
var first_day = document.getElementById('love-day');
first_day.innerHTML = "D + " + result3 ;

var phone = document.getElementById('phone');
var question = document.getElementById('question');
var information = document.getElementById('information');

phone.addEventListener('click', alertPhone);
question.addEventListener('click',Question);
information.addEventListener('click',Info);

function alertPhone() {
    alert('대표번호 : '+'010-3168-0742');
}
function Question() {
    prompt('문의할 내용을 입력하세요','000 기능을 문의합니다.');
}
function Info(){
    alert('이 사이트는 커플들의 일정을 관리해주기 위한 사이트입니다.')
}