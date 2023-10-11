import { useEffect } from 'react';

function MyComponent() {
  function getTimeRemaining(endtime: string) {
    const total = Date.parse(endtime) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function initializeClock(id: string, endtime: string) {
    const clock = document.getElementById(id);
    if (!clock) return;
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      if (daysSpan) daysSpan.innerHTML = t.days.toString();
      if (hoursSpan) hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      if (minutesSpan) minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      if (secondsSpan) secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  useEffect(() => {
    // Define the deadline as a string in ISO format.
    const deadline = new Date(2023, 10, 13, 6).toISOString();

    // Initialize the clock with the specified ID and deadline.
    initializeClock('clockdiv', deadline);
  }, []);

  return (
    <div id="clockdiv">
      <span className="days"></span>
      <span className="hours"></span>
      <span className="minutes"></span>
      <span className="seconds"></span>
    </div>
  );
}

export default MyComponent;
