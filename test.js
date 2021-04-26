var currentTitle = document.getElementById('current-year-month'); //id가 current_year_month인 것을 찾아서 변수에 저장
var calendarBody = document.getElementById('calendar-body');
var today = new Date(); //오늘 날짜
var first = new Date(today.getFullYear(), today.getMonth(),1); //이번(현재) 달의 첫째 날 객체 생성 후 first에 저장
var dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; //dayList에 (일~토) 저장
var monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];//monthList에 (1~12월)저장
var LeapYear=[31,29,31,30,31,30,31,31,30,31,30,31]; //윤년일 때
var NotLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31]; //윤년이 아닐 때 
var pageFirst = first; //pageFirst에 first객체 저장
var pageYear;

// 윤년 체크하는 코드
if(first.getFullYear() % 4 === 0){
    pageYear = LeapYear; //윤년이면 pageYear에 윤년리스트 저장
}else{
    pageYear = NotLeapYear; //윤년이 아니면 pageYear에 윤년이 아닌 리스트 저장
}

function showCalendar(){
    currentTitle.innerHTML=first.getFullYear()+"년 " + (first.getMonth()+1)+"월"; 
    let monthCnt = 100;
    let cnt = 1;
    for(var i = 0; i < 6; i++){ //주를 만들기 위해 for문 6번 돌린다. (최대 6주까지 있다고 가정)
        var $tr = document.createElement('tr'); //tr요소를 생성한다. (행 생성)
        $tr.setAttribute('id', monthCnt);  //tr id 속성에 monthCnt를 넣어준다.
        for(var j = 0; j < 7; j++){
            if((i === 0 && j < first.getDay()) || cnt > pageYear[first.getMonth()]){ // 만약 첫번째 주라면 시작하는 요일부터 날짜를 출력. || 달력 출력 종료 조건
                var $td = document.createElement('td'); // td요소를 생성한다. (열 생성)
                $tr.appendChild($td);   // <tr><td></td><tr>처럼 tr태그안에 td태그를 자식태그로 한다. 
            }else{
                var $td = document.createElement('td'); // td요소를 생성한다. (열 생성)
                $td.innerText = cnt; //td태그에 cnt(날짜)삽입. 
                $td.setAttribute('id', cnt);   //td id 속성에 cnt 넣어준다.          
                $tr.appendChild($td); // <tr><td></td><tr>처럼 tr태그안에 td태그를 자식태그로 한다.
                cnt++; //날짜 올려준다.
            }
        }
        monthCnt++;
        calendarBody.appendChild($tr);
    }
}
showCalendar();

function next(){
    // inputBox.value = "";
    // const $divs = document.querySelectorAll('#input-list > div');
    // $divs.forEach(function(e){
    //   e.remove();
    // });
    // const $btns = document.querySelectorAll('#input-list > button');
    // $btns.forEach(function(e1){
    //   e1.remove();
    // });
    if(pageFirst.getMonth() === 12){ // 12월이면 
        pageFirst = new Date(first.getFullYear()+1, 1, 1); //년도를 +1해준다. 
        first = pageFirst;
        if(first.getFullYear() % 4 === 0){ // 해당 년도가 윤년인지 아닌지 체크
            pageYear = leapYear;
        }else{
            pageYear = notLeapYear;
        }
    }else{ //12월이 아니면! 
        pageFirst = new Date(first.getFullYear(), first.getMonth()+1, 1); //월을 +1해준다. 마지막 인자 1은 1일이라는 뜻 
        first = pageFirst; //참조변수 pageFirst를 first에 저장. 
    }
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    currentTitle.innerHTML=first.getFullYear()+"년 " + (first.getMonth()+1)+"월";
    removeCalendar();
    showCalendar(); 
    // showMain();
    // clickedDate1 = document.getElementById(today.getDate());
    // clickedDate1.classList.add('active');  
    // clickStart();
    // reshowingList();
}

function removeCalendar(){
    let catchTr = 100;
    for(var i = 100; i< 106; i++){
        var $tr = document.getElementById(catchTr);
        $tr.remove();
        catchTr++;
    }
}

function prev(){
    inputBox.value = "";
    const $divs = document.querySelectorAll('#input-list > div');
    $divs.forEach(function(e){
      e.remove();
    });
    const $btns = document.querySelectorAll('#input-list > button');
    $btns.forEach(function(e1){
      e1.remove();
    });
    if(pageFirst.getMonth() === 1){
        pageFirst = new Date(first.getFullYear()-1, 12, 1);
        first = pageFirst;
        if(first.getFullYear() % 4 === 0){
            pageYear = leapYear;
        }else{
            pageYear = notLeapYear;
        }
    }else{
        pageFirst = new Date(first.getFullYear(), first.getMonth()-1, 1);
        first = pageFirst;
    }
    today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
    currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ first.getFullYear();
    removeCalendar();
    showCalendar();
    showMain();
    clickedDate1 = document.getElementById(today.getDate());
    clickedDate1.classList.add('active');
    clickStart();
    reshowingList();
}

