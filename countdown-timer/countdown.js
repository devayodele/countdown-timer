const countDownTo = new Date("Dec 31, 2022 24: 00: 00");
countDownTo.toLocaleString("en-US", {
  hour12: false,
});

console.log(countDownTo);

let timeoutID = setInterval(() => {
  //Get current date and time
  const now = new Date();

  timeRemaining = countDownTo.getTime() - now.getTime();

  const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
  const hours = Math.floor(timeRemaining / 1000 / 60 / 60);
  const minutes = Math.floor(timeRemaining / 1000 / 60);
  const seconds = Math.floor(timeRemaining / 1000);

  //Getting the correct display value for each unit
  //subtract greater unit from lesser unit

  const daysToDisplay = days;
  // subtract 24 hours for every day remaining from hours
  const hoursToDisplay = hours - days * 24;
  //subtract 60 minutes for every hour remaining from minutes
  const minutesToDisplay = minutes - hours * 60;
  //subtract 60 seconds from every minute remaining from seconds
  const secondsToDisplay = seconds - minutes * 60;

  //Time now ready to display

  const countDown = document.querySelector(".countdown-container");
  countDown.innerHTML = `<div class='mainDiv'> 
        
      <div class='flex-item'>
      <span id='days' class='number'> ${formatNumber(daysToDisplay)}
      </span>
      <span class='text'>Days</span>
      </div>

      <div class='flex-item'>
      <span id='hours' class='number'>${formatNumber(hoursToDisplay)}</span>
       <span class='text'>Hours</span>
      </div>
      
    <div class='flex-item'>
    <span id='minutes' class='number'>${formatNumber(minutesToDisplay)}
    </span>
    
    <span class='text'>Minutes</span>
      </div>
      
     <div class='flex-item'> 
     <span id='seconds' class='number'> ${formatNumber(secondsToDisplay)}
     </span>
      <span class='text'>Seconds</span>
     </div>
      
        </div>`;

  if (timeRemaining < 0) {
    countDown.innerText = "EXPIRED!";
  }
}, 1000);

function formatNumber(inputNumber) {
  const outputNumber = inputNumber.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  return outputNumber;
}
