const clock = document.querySelector(".clock");

let sec = 0;
let min = 0;
let hr = 0;
let intervalId;
const start = ()=>{
   intervalId = setInterval(() => {
        if(sec<59){
            sec++;
        }
        else if(min>=59){
            min = 0;
            hr++;
        }
        else{
            sec = 0;
            min++;
        }
        let time = String(hr).padStart(2,"0")+":"+String(min).padStart(2,"0")+":"+String(sec).padStart(2,"0");
        clock.innerText = time;
    }, 1000);
};

const stop = ()=>{
    clearInterval(intervalId);
};