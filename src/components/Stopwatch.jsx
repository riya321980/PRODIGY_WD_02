import React, { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, ms: 0 });
  const [status, setStatus] = useState();

  let updHr = time.hr;
  let updMin = time.min;
  let updSec = time.sec;
  let updMs = time.ms;

  const reset = () => {
    clearInterval(status);
    setTime({ hr: 0, min: 0, sec: 0, ms: 0 });
  };

  const stop = () => {
    clearInterval(status);
  };

  const start = () => {
    fun();
    setStatus(setInterval(fun, 10));
  };

  const fun = () => {
    if (updMs === 100) {
      updMs = 0;
      updSec++;
    }
    if (updSec === 60) {
      updSec = 0;
      updMin++;
    }
    if (updMin === 60) {
      updMin = 0;
      updHr++;
    }
    updMs++;
    return setTime({ hr: updHr, min: updMin, sec: updSec, ms: updMs });
  };

  return (
    <div className="bg-indigo-400 w-screen h-screen p-52">
      <div className=" bg-black text-white  content-center w-96 m-auto text-center rounded-lg">
        <h1 className=" text-4xl font-bold mx-20 my-16">Stopwatch</h1>
        <div className=" mx-20 text-3xl">
          {time.hr + " : " + time.min + " : " + time.sec + " : " + time.ms}
        </div>
        <div className=" my-10 mx-20">
          <button
            onClick={start}
            className=" border-2 px-3 border-indigo-500 rounded-l-md hover:scale-105 duration-300 p-1"
          >
            Start
          </button>
          <button
            onClick={stop}
            className="hover:scale-105 duration-300 border-2 px-3 mx-2 border-indigo-500 p-1"
          >
            Stop
          </button>
          <button
            onClick={reset}
            className="hover:scale-105 duration-300 border-2 px-3 border-indigo-500 rounded-r-md p-1"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
