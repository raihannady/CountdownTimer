import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const currentTime = new Date().getTime();
    const difference = targetDate - currentTime;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const updateTimer = () => {
      setTimeRemaining(calculateTimeRemaining());

      requestAnimationFrame(updateTimer);
    };

    updateTimer();

    return () => cancelAnimationFrame(updateTimer);
  }, [targetDate]);

  return (
    <div className="countdown">
      <div>
        <h1>{timeRemaining.days}</h1> <br /> <h4>DAYS</h4>
      </div>
      <div>
        <h1>{timeRemaining.hours}</h1> <br /> <h4>HOURS</h4>
      </div>
      <div>
        <h1>{timeRemaining.minutes}</h1>
        <br /> <h4>MINUTES</h4>
      </div>
      <div>
        <h1>{timeRemaining.seconds}</h1> <br /> <h4>SECONDS</h4>
      </div>
    </div>
  );
};

export default CountdownTimer;
