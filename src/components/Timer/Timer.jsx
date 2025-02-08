import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { FaPlay as Play, FaPause as Pause } from "react-icons/fa";
import { BsArrowRepeat as Re } from "react-icons/bs";
import './Timer.css';

const Timer = () => {
  const [time, setTime] = useState(1500); 
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(isBreak ? 900 : 1500); 
  };

  const handleBreak = () => {
    setIsRunning(false);
    setIsBreak(!isBreak);
    setTime(isBreak ? 1500 : 900); 
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <>
      <div className='bg-[#2B2B2B] h-screen'>
        <Navbar />
        <div className='flex flex-col gap-6 items-center justify-center'>
          <div className='font-[impact] text-[#FF4242] text-[35vw] text-shadow'>
            {formatTime(time)}
          </div>
          <div className='flex flex-row gap-4'>
            <div className='bg-[#D9D9D9] pl-5 pr-4 py-4 rounded-full' onClick={handlePlayPause}>
              {isRunning ? <Pause size={20} /> : <Play size={20} />}
            </div>  
            <div className='bg-[#D9D9D9] p-4 rounded-full' onClick={handleReset}>
              <Re size={20} />
            </div>
          </div>
          <button className='font-[impact] text-[white] text-[15vw] mt-5 hover:cursor-pointer hover:shadow-xl' 
          onClick={handleBreak}
          >
            {isBreak ? 'STUDY?' : 'BREAK?'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Timer;