import { CSSProperties, useRef, useState } from 'react';

const stopWatchStyle: CSSProperties = {
  color: 'white',
  backgroundColor: 'teal',
  padding: '1rem',
  borderRadius: '8px',
  marginTop: '1rem',
};

export default function Stopwatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => setNow(Date.now()), 10);
  };

  const handleStop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div style={stopWatchStyle}>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
