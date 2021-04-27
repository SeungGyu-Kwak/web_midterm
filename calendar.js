var currentTitle = document.getElementById('current-year-month'); //id가 current_year_month인 것을 찾아서 변수에 저장
var calendarBody = document.getElementById('calendar-body');
var TodayDay = document.getElementById('day'); //왼쪽 섹션에 요일찍기 위한 변수
var TodayDate = document.getElementById('date');//왼쪽 섹션에 날짜(일)찍기 위한 변수 
var today = new Date(); //오늘 날짜, 전역변수 
var realToday = new Date(today.getFullYear(), today.getMonth(),today.getDate()); // 오늘의 정확한 날짜. 
var firstMonth = new Date(today.getFullYear(), today.getMonth(),1); //이번(현재) 달의 첫째 날 객체 생성 후 first에 저장 
var lastMonth = new Date(today.getFullYear(), today.getMonth()+1, 0); //이번 달의 마지막 날 
var dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; //dayList에 (일~토) 저장
var monthList = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];//monthList에 (1~12월)저장
var LeapYear=[31,29,31,30,31,30,31,31,30,31,30,31]; //윤년일 때
var NotLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31]; //윤년이 아닐 때 
var pageFirst = firstMonth; //pageFirst에 first객체 저장 pageFirst에는 이번 달의 첫째 날 정보를 가지고 있다. 
var pageYear, clickedDate;
var tdGroup = []; //month의 날짜들을 담을 배열 객체 생성

function showCalendar(){ //달력 출력 메소드 
    var firstMonth = new Date(today.getFullYear(), today.getMonth(),1); //이번(현재) 달의 첫째 날 객체 생성 후 first에 저장
    currentTitle.innerHTML = firstMonth.getFullYear()+"년"+ '&nbsp;&nbsp;&nbsp;&nbsp'+ monthList[firstMonth.getMonth()];
    currentTitle.style.fontSize = '30px';
    // 윤년 체크하는 코드
    if(firstMonth.getFullYear() % 4 === 0){
        pageYear = LeapYear; //윤년이면 pageYear에 윤년리스트 저장
    }else{
        pageYear = NotLeapYear; //윤년이 아니면 pageYear에 윤년이 아닌 리스트 저장
    }
    let monthCnt = 100;
    let cnt = 1;
    for(var i = 0; i < 6; i++){ //주를 만들기 위해 for문 6번 돌린다. (최대 6주까지 있다고 가정)
        var $tr = document.createElement('tr'); //tr요소를 생성한다. (행 생성)
        $tr.setAttribute('id', monthCnt);  //tr id 속성에 monthCnt를 넣어준다.
        let count = 0;
        for(var j = 0; j < 7; j++){
            if((i === 0 && j < firstMonth.getDay()) || cnt > pageYear[firstMonth.getMonth()]){ // 만약 첫번째 주라면 시작하는 요일부터 날짜를 출력. || 달력 출력 종료 조건
                var $td = document.createElement('td'); // td요소를 생성한다. (열 생성)
                $tr.appendChild($td);   // <tr><td></td><tr>처럼 tr태그안에 td태그를 자식태그로 한다. 
            }else{
                var $td = document.createElement('td'); // td요소를 생성한다. (열 생성)
                $td.innerText = cnt; //td태그에 cnt(날짜)삽입. 
                $td.setAttribute('id', cnt);   //td id 속성에 cnt 넣어준다.          
                $tr.appendChild($td); // <tr><td></td><tr>처럼 tr태그안에 td태그를 자식태그로 한다.

                //오늘 날짜 체크
                if (firstMonth.getFullYear()==realToday.getFullYear()&&firstMonth.getMonth()==realToday.getMonth()&& cnt == realToday.getDate())
                {
                    $td.classList.add('today-day');
                }
                //일요일 빨간색으로 체크 
                if (j == 0) 
                    $td.innerHTML = '<font color="red">' + cnt + '</font>';
                //토요일 파란색으로 체크
                if (j == 6)
                    $td.innerHTML = '<font color="blue">' + cnt + '</font>';
                
                cnt++; //날짜 올려준다.
            }
            
        }
        monthCnt++;
        calendarBody.appendChild($tr); //calendarBody에 자식태그를 추가한다. 즉, 한 주<tr>씩 추가한다. 
    }
    //현재 출력되는 달의 모든 날짜에 click이벤트 걸어주기
    for(let i = 1; i <= pageYear[today.getMonth()]; i++){ //현재 달의 1일부터 그 달의 마지막 날까지 for문 돌기
        tdGroup[i] = document.getElementById(i); //배열안에는 id=i 를 가진 것이 들어감.
        tdGroup[i].addEventListener('click',changeToday); //모든 날짜에 click이라는 이벤트가 실행될 때마다 changeToday함수 실행.
    }
}

showCalendar(); //달력출력하기
showMain();
// clickedDate = document.getElementById(today.getDate());
// clickedDate.classList.add('active');
//

//현재 출력된 달력을 지워주는 메소드
function removeCalendar(){ 
    let catchTr = 100;
    for(var i = 100; i< 106; i++){
        var $tr = document.getElementById(catchTr);
        $tr.remove();
        catchTr++;
    }
}

//이전 달을 출력하기 위한 메소드 
function preCalendar(){
    // inputBox.value = "";
    // const $divs = document.querySelectorAll('#input-list > div');
    // $divs.forEach(function(e){
    //   e.remove();
    // });
    // const $btns = document.querySelectorAll('#input-list > button');
    // $btns.forEach(function(e1){
    //   e1.remove();
    // });
    
    today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate()); //today를 재 설정해준다.
    
    removeCalendar();//기존(현재 화면에 떠있는)에 있던 달력 삭제
    showCalendar();//달력 출력 

    clickedDate = document.getElementById(today.getDate());
    clickedDate.classList.add('active');
    showMain();
    // reshowingList();
}

//다음 달 출력해주는 메소드 
function nextCalendar(){
    // inputBox.value = "";
    // const $divs = document.querySelectorAll('#input-list > div');
    // $divs.forEach(function(e){
    //   e.remove();
    // });
    // const $btns = document.querySelectorAll('#input-list > button');
    // $btns.forEach(function(e1){
    //   e1.remove();
    // });
    

    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
     
    removeCalendar();
    showCalendar(); 
    clickedDate = document.getElementById(today.getDate());
    clickedDate.classList.add('active');
    showMain();
    // reshowingList();
}

function showMain(){
    TodayDay.innerHTML = dayList[today.getDay()]; //왼쪽 섹션에 현재 요일 출력
    TodayDate.innerHTML = today.getDate();//오른쪽 섹션에 현재 날짜 출력
}

//왼쪽 섹션에 날짜 바꿔주는 메소드 
function changeToday(e){
    for(let i = 1; i <= pageYear[today.getMonth()]; i++){  //현재 달의 1일부터 그 달의 마지막 날까지 for문 돌기
        if(tdGroup[i].classList.contains('active')){ //각 날짜에 class가 active값이 있는지 체크 (true/false)
            tdGroup[i].classList.remove('active'); //class='active'가 있다면 class 제거함. 
        }
    }
    clickedDate = e.currentTarget; //현재 클릭한 날짜(e.currentTarget)를 clickDate1변수에 저장. 
    clickedDate.classList.add('active');// 현재 클릭한 날짜의 class에 active 추가 
    today = new Date(today.getFullYear(), today.getMonth(), clickedDate.id); //현재 눌린 날을 today에 저장. 
    showMain(); // 왼쪽 섹션 업데이트 
    keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
    reshowingList();
}