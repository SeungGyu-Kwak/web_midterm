var currentTitle = document.getElementById('current-year-month'); //id가 current_year_month인 것을 찾아서 변수에 저장
var calendarBody = document.getElementById('calendar-body');
var TodayDay = document.getElementById('day'); //왼쪽 섹션에 요일찍기 위한 변수
var TodayDate = document.getElementById('date'); //왼쪽 섹션에 날짜(일)찍기 위한 변수
var today = new Date(); //오늘 날짜, 전역변수
var realToday = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
); // 오늘의 정확한 날짜.
var firstMonth = new Date(today.getFullYear(), today.getMonth(), 1); //이번(현재) 달의 첫째 날 객체 생성 후 first에 저장
var lastMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0); //이번 달의 마지막 날
var dayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]; //dayList에 (일~토) 저장
var monthList = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
]; //monthList에 (1~12월)저장
var LeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //윤년일 때
var NotLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //윤년이 아닐 때
var pageFirst = firstMonth; //pageFirst에 first객체 저장 pageFirst에는 이번 달의 첫째 날 정보를 가지고 있다.
var pageYear, clickedDate;
var tdGroup = []; //month의 날짜들을 담을 배열 객체 생성
var keyValue; //오늘의 날짜를 키 값으로 준다.
var key;

function showCalendar() {
  //달력 출력 메소드
  var firstMonth = new Date(today.getFullYear(), today.getMonth(), 1); //이번(현재) 달의 첫째 날 객체 생성 후 first에 저장
  currentTitle.innerHTML =
    firstMonth.getFullYear() +
    '년' +
    '&nbsp;&nbsp;&nbsp;&nbsp' +
    monthList[firstMonth.getMonth()];
  currentTitle.style.fontSize = '30px';
  // 윤년 체크하는 코드
  if (firstMonth.getFullYear() % 4 === 0) {
    pageYear = LeapYear; //윤년이면 pageYear에 윤년리스트 저장
  } else {
    pageYear = NotLeapYear; //윤년이 아니면 pageYear에 윤년이 아닌 리스트 저장
  }
  let monthCnt = 100;
  let cnt = 1;
  for (var i = 0; i < 6; i++) {
    //주를 만들기 위해 for문 6번 돌린다. (최대 6주까지 있다고 가정)
    var $tr = document.createElement('tr'); //tr요소를 생성한다. (행 생성)
    $tr.setAttribute('id', monthCnt); //tr id 속성에 monthCnt를 넣어준다.
    let count = 0;
    for (var j = 0; j < 7; j++) {
      if (
        (i === 0 && j < firstMonth.getDay()) ||
        cnt > pageYear[firstMonth.getMonth()]
      ) {
        // 만약 첫번째 주라면 시작하는 요일부터 날짜를 출력. || 달력 출력 종료 조건
        var $td = document.createElement('td'); // td요소를 생성한다. (열 생성)
        $tr.appendChild($td); // <tr><td></td><tr>처럼 tr태그안에 td태그를 자식태그로 한다.
      } else {
        var $td = document.createElement('td'); // td요소를 생성한다. (열 생성)
        $td.innerText = cnt; //td태그에 cnt(날짜)삽입.
        var keyValue =
          today.getFullYear() - 2000 + '' + (today.getMonth() + 1) + '' + cnt; //오늘의 날짜를 키 값으로 준다.
        key = keyValue;
        key = Number(key);
        $td.setAttribute('id', key); //td id 속성에 cnt 넣어준다.
        $tr.appendChild($td); // <tr><td></td><tr>처럼 tr태그안에 td태그를 자식태그로 한다.

        //일요일 빨간색으로 체크
        if (j == 0) $td.innerHTML = '<font color="red">' + cnt + '</font>';
        //토요일 파란색으로 체크
        if (j == 6) {
          $td.innerHTML = '<font color="blue">' + cnt + '</font>';
        }
        cnt++; //날짜 올려준다.
      }
    }
    monthCnt++;
    calendarBody.appendChild($tr); //calendarBody에 자식태그를 추가한다. 즉, 한 주<tr>씩 추가한다.
  }
}

showCalendar(); //달력출력하기
inputAlbum();

function inputAlbum() {
  for (let i = 1; i <= pageYear[today.getMonth()]; i++) {
    //현재 달의 1일부터 그 달의 마지막 날까지 for문 돌기
    keyValue =
      today.getFullYear() - 2000 + '' + (today.getMonth() + 1) + '' + i; //오늘의 날짜를 키 값으로 준다.
    key = keyValue;
    key = Number(key);
    tdGroup[key] = document.getElementById(key);
  }

  var div1 = document.createElement('div');
  var div2 = document.createElement('div');
  var div3 = document.createElement('div');
  var div4 = document.createElement('div');
  var div5 = document.createElement('div');
  var div6 = document.createElement('div');
  var div7 = document.createElement('div');
  var div8 = document.createElement('div');
  var div9 = document.createElement('div');
  var div10 = document.createElement('div');
  var div11 = document.createElement('div');
  var div12 = document.createElement('div');
  var div13 = document.createElement('div');
  var div14 = document.createElement('div');
  var div15 = document.createElement('div');
  var div16 = document.createElement('div');

  var div17 = document.createElement('div');
  var div18 = document.createElement('div');
  var div19 = document.createElement('div');
  var div20 = document.createElement('div');
  var div21 = document.createElement('div');
  var div22 = document.createElement('div');
  var div23 = document.createElement('div');
  var div24 = document.createElement('div');
  var div25 = document.createElement('div');
  var div26 = document.createElement('div');
  var div27 = document.createElement('div');
  var div28 = document.createElement('div');
  var div29 = document.createElement('div');
  var div30 = document.createElement('div');
  var div31 = document.createElement('div');

  div1.classList.add('key');
  div2.classList.add('key');
  div3.classList.add('key');
  div4.classList.add('key');
  div5.classList.add('key');
  div6.classList.add('key');
  div7.classList.add('key');
  div8.classList.add('key');
  div9.classList.add('key');
  div10.classList.add('key');
  div11.classList.add('key');
  div12.classList.add('key');
  div13.classList.add('key');
  div14.classList.add('key');
  div15.classList.add('key');
  div16.classList.add('key');
  div17.classList.add('key');
  div18.classList.add('key');

  div19.classList.add('key');
  div20.classList.add('key');
  div21.classList.add('key');
  div22.classList.add('key');
  div23.classList.add('key');
  div24.classList.add('key');
  div25.classList.add('key');
  div26.classList.add('key');
  div27.classList.add('key');
  div28.classList.add('key');
  div29.classList.add('key');
  div30.classList.add('key');
  div31.classList.add('key');

  if (today.getMonth() + 1 == 4) {
    tdGroup[2141].appendChild(div1);
    div1.innerHTML = '<img src = "picture/1.jpeg">';
    tdGroup[2142].appendChild(div2);
    div2.innerHTML = '<img src = "picture/2.jpeg">';
    tdGroup[2143].appendChild(div3);
    div3.innerHTML = '<img src = "picture/3.jpeg">';
    tdGroup[2144].appendChild(div4);
    div4.innerHTML = '<img src = "picture/4.jpeg">';
    tdGroup[2145].appendChild(div5);
    div5.innerHTML = '<img src = "picture/5.jpeg">';
    tdGroup[2146].appendChild(div6);
    div6.innerHTML = '<img src = "picture/6.jpeg">';
    tdGroup[2147].appendChild(div7);
    div7.innerHTML = '<img src = "picture/7.jpeg">';
    tdGroup[2148].appendChild(div8);
    div8.innerHTML = '<img src = "picture/8.jpeg">';
    tdGroup[2149].appendChild(div9);
    div9.innerHTML = '<img src = "picture/9.jpeg">';
    tdGroup[21410].appendChild(div10);
    div10.innerHTML = '<img src = "picture/10.jpeg">';
    tdGroup[21411].appendChild(div11);
    div11.innerHTML = '<img src = "picture/11.jpeg">';
    tdGroup[21412].appendChild(div12);
    div12.innerHTML = '<img src = "picture/12.jpeg">';
    tdGroup[21413].appendChild(div13);
    div13.innerHTML = '<img src = "picture/13.jpeg">';
    tdGroup[21414].appendChild(div14);
    div14.innerHTML = '<img src = "picture/14.jpeg">';
    tdGroup[21415].appendChild(div15);
    div15.innerHTML = '<img src = "picture/15.jpeg">';
    tdGroup[21416].appendChild(div16);
    div16.innerHTML = '<img src = "picture/16.jpeg">';
    tdGroup[21417].appendChild(div17);
    div17.innerHTML = '<img src = "picture/17.jpeg">';
    tdGroup[21418].appendChild(div18);
    div18.innerHTML = '<img src = "picture/18.jpeg">';
    tdGroup[21419].appendChild(div19);
    div19.innerHTML = '<img src = "picture/19.jpeg">';
    tdGroup[21420].appendChild(div20);
    div20.innerHTML = '<img src = "picture/20.jpeg">';
    tdGroup[21421].appendChild(div21);
    div21.innerHTML = '<img src = "picture/21.jpeg">';
    tdGroup[21422].appendChild(div22);
    div22.innerHTML = '<img src = "picture/22.jpeg">';
    tdGroup[21425].appendChild(div25);
    div25.innerHTML = '<img src = "picture/23.jpeg">';
  } else if (today.getMonth() + 1 == 5) {
  } else if (today.getMonth() + 1 == 6) {
  } else if (today.getMonth() + 1 == 7) {
  } else if (today.getMonth() + 1 == 8) {
  } else if (today.getMonth() + 1 == 9) {
  } else if (today.getMonth() + 1 == 10) {
  } else if (today.getMonth() + 1 == 11) {
  } else if (today.getMonth() + 1 == 12) {
  }
}

//현재 출력된 달력을 지워주는 메소드
function removeCalendar() {
  let catchTr = 100;
  for (var i = 100; i < 106; i++) {
    var $tr = document.getElementById(catchTr);
    $tr.remove();
    catchTr++;
  }
}

//이전 달을 출력하기 위한 메소드
function preCalendar() {
  today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()); //today를 재 설정해준다.
  removeCalendar(); //기존(현재 화면에 떠있는)에 있던 달력 삭제
  showCalendar(); //달력 출력
  inputAlbum();
}

//다음 달 출력해주는 메소드
function nextCalendar() {
  today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  removeCalendar();
  showCalendar();
  inputAlbum();
}

var phone = document.getElementById('phone');
var question = document.getElementById('question');
var information = document.getElementById('information');

phone.addEventListener('click', alertPhone);
question.addEventListener('click', Question);
information.addEventListener('click', Info);

function alertPhone() {
  alert('대표번호 : ' + '010-3168-0742');
}
function Question() {
  prompt('문의할 내용을 입력하세요', '000 기능을 문의합니다.');
}
function Info() {
  alert('이 사이트는 커플들의 일정을 관리해주기 위한 사이트입니다.');
}
