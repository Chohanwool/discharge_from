const clockTitle = document.querySelector(".js-clock");


setInterval(getTime, 1000);
getTime();

function getTime(){
    const today = new Date().getTime();
    const dDay = new Date("apr 11, 2023, 00:00:00");
    const gap = dDay - today;
    const day = Math.ceil(gap/ (1000*60*60*24));
    const hour= String(Math.ceil((gap % (1000*60*60*24)) / (1000*60*60))).padStart(2, 0);
    const min = String(Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, 0);
    const sec = String(Math.ceil((gap % (1000 * 60)) / 1000)).padStart(2, 0);
    clockTitle.innerHTML = `${day}일 ${hour}시간 ${min}분 ${sec}초 남았습니다.`
};