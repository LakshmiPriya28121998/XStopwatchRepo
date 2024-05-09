import { useEffect, useState } from 'react';





export default function Stopwatch() {

    const [timeron , setTimeron] = useState(0)
    const [timeronflag , setTimeronflag] = useState(false)

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const remainingsec = seconds % 60;
        return `${min}:${remainingsec < 10 ? "0" : ""}${remainingsec}`;
    }

    const handleStart = () => {
     
        setTimeronflag((prev) => !prev)
       
    }

    const handleReset = () => {
        setTimeron(0);
        setTimeronflag(false)
    }

    useEffect(() => {
        let timer;
        if(timeronflag){
            timer = setInterval(() => {
                setTimeron((prev) => prev+1)
            }, 1000);
        }
        // else{
        //     clearInterval(timer)
        // }

        return () => clearInterval(timer)
    },[timeronflag])

        return(
            <div>
                <h2>Stopwatch</h2>
                <h4>Time : {formatTime(timeron)}</h4>
                <button onClick={handleStart}>
                {timeronflag ? 'Stop' : 'Start'}
                    
                    </button>
                <button onClick={handleReset}>Reset</button>
            </div>
        )
  }