let dayCount = 0;


let cnt = 0;

let counter = setInterval(function() {
    function countDown() {
        cnt++
        let today = new Date();

        let month = today.getMonth() + 1;
        let dat = today.getDate();
        let hour = today.getHours();
        let min = today.getMinutes();
        let secon = today.getSeconds();

        if(cnt == 1) {
            for(let i = 1; i<month; i++) {
                if(i==1 || i == 3 || i == 5 || i==7 || i == 8 || i ==10 || i == 12){
                    dayCount = dayCount + 31;
                }
                else if(i==4 || i == 6 || i == 9 || i==11){
                    dayCount = dayCount + 30;
                }
                else if(i==2) {
                    dayCount = dayCount + 28;
                }
            }
        }

        let count_data = 365-dayCount-dat;
        console.log(dayCount, dat);

        let days = document.querySelector('.day');
        let hours = document.querySelector('.hour');
        let mins = document.querySelector('.min');
        let secons = document.querySelector('.secon');

        days.innerHTML=`<p>${count_data}</p>`;
        hours.innerHTML=`<p>${24-hour-1}</p>`;
        mins.innerHTML=`<p>${60-min-1}</p>`;
        secons.innerHTML=`<p>${59-secon}</p>`;

    }
    timer = countDown(countDown, 50);
},1000)