import React, { useState, useEffect } from 'react';
import './App.css';

const topics = [
  "Geography",
  "Entertainment",
  "History",
  "Arts",
  "Literature",
  "Science",
  "Nature",
  "Sports",
  "Leisure"
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomMonthYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const startYear = 1965;
  const year = getRandomInt(startYear, currentYear);
  let month = getRandomInt(1, 12);

  if (year === currentYear && month > currentMonth) {
    month = getRandomInt(1, currentMonth);
  }

  return { year, month: month.toString().padStart(2, '0') };
};

const getRandomTopic = () => {
  return topics[getRandomInt(0, topics.length - 1)];
};

const App = () => {
  const [result, setResult] = useState({ year: '', month: '', topic: '' });
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (spinning) {
      let duration = 0;
      let spinSpeed = 100;

      const interval = setInterval(() => {
        const { year, month } = getRandomMonthYear();
        const topic = getRandomTopic();
        setResult({ year, month, topic });

        duration += spinSpeed;
        if (duration >= 5000) {
          clearInterval(interval);
          setSpinning(false);
        } else {
          spinSpeed = Math.min(spinSpeed + 50, 500); // Slow down the spin
        }
      }, spinSpeed);

      return () => clearInterval(interval);
    }
  }, [spinning]);

  const handleClick = () => {
    setSpinning(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>RANDOM TIME & TOPIC</h1>
        <button onClick={handleClick} disabled={spinning}>PRESS HERE</button>
        {result.year && (
          <div className="result">
            <p>Time</p>
	    <p>{result.month}-{result.year}</p>
            <p>Topic</p>
	    <p>{result.topic}</p>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;

