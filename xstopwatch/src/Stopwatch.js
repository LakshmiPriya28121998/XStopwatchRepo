import { useEffect, useState } from 'react';





export default function Stopwatch() {

    // const [timeron , setTimeron] = useState(0)
    // const [timeronflag , setTimeronflag] = useState(false)

    // const formatTime = (seconds) => {
    //     const min = Math.floor(seconds / 60);
    //     const remainingsec = seconds % 60;
    //     return `${min}:${remainingsec < 10 ? "0" : ""}${remainingsec}`;
    // }

    // const handleStart = () => {
     
    //     setTimeronflag((prev) => !prev)
       
    // }

    // const handleReset = () => {
    //     setTimeron(0);
    //     setTimeronflag(false)
    // }

    // useEffect(() => {
    //     let timer;
    //     if(timeronflag){
    //         timer = setInterval(() => {
    //             setTimeron((prev) => prev+1)
    //         }, 1000);
    //     }
    //     // else{
    //     //     clearInterval(timer)
    //     // }

    //     return () => clearInterval(timer)
    // },[timeronflag])

    const [curTime, setCurTime] = useState(0);
    const [toggle, setToggle] = useState("Start");
    const [reset, setReset] = useState(false);
  
    const [intervalId, setIntervalId] = useState(null);

    const formatted = () => {
        let minutes = Math.floor(Number(curTime) / 60);
        let seconds = Number(curTime) % 60;
        // if (String(minutes).length < 2) minutes = "0" + String(minutes);
        if (String(seconds).length < 2) seconds = "0" + String(seconds);
    
        return `${minutes}:${seconds}`; //60 + ' ' +;
      };
    const handleReset = (id) => {
        setCurTime(0);
        if (id) {
          clearInterval(id);
          setIntervalId(null);
        }
      };

      const handleWatch = (id) => {
        toggle === "Start" ? setToggle("Stop") : setToggle("Start");
        if (!intervalId) {
          const timer = setInterval(() => {
            setCurTime((prev) => prev + 1);
          }, 1000);
          setIntervalId(timer);
        } else {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      };
 

        return(
            // <div>
             
            //     <h2>Stopwatch</h2>
            //     <h4>Time : {formatTime(timeron)}</h4>
            //     <button onClick={handleStart}>
            //     {timeronflag ? 'Stop' : 'Start'}
                    
            //         </button>
            //     <button onClick={handleReset}>Reset</button>
            // </div>
            <div>
            <h1>Stopwatch</h1>
            <div className="time">Time: {formatted()}</div>
            <div>
              <button type="button" onClick={() => handleWatch(intervalId)}>
                {toggle}
              </button>
              <button type="button" onClick={() => handleReset(intervalId)}>
                Reset
              </button>
            </div>
            </div>
        )
  }