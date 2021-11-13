//Create Digital Clock Function:
let digitalClock = () => {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let timeFormat = "AM";
  let day = weeks[date.getDay()];
  let dayNum = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
    timeFormat = "PM";
  }

  hour = (hour < 10) ? '0' + hour : hour;
  second = (second < 10) ? '0' + second : second;
  minute = (minute < 10) ? '0' + second : minute;

  let timeDisplay = `${hour}:${minute}:${second} ${timeFormat}`;
  let dateDisplay = `${day},${dayNum} ${month}, ${year}`;

  document.querySelector("#clock-display").textContent = timeDisplay;
  document.querySelector("#date-display").textContent = dateDisplay;

  setInterval(digitalClock, 1000);
};

digitalClock();
