const getDate = () => {
  console.log("inside interval");
  const now = new Date();
  const sec = now.getSeconds() / 60;
  const mins = (now.getMinutes() + sec) / 60;
  const hours = (now.getHours() + mins) / 12;

  document.querySelector(".seconds").style.transform = `rotate(${
    sec * 360
  }deg)`;
  document.querySelector(".minutes").style.transform = `rotate(${
    mins * 360
  }deg)`;
  document.querySelector(".hour").style.transform = `rotate(${hours * 360}deg)`;
};

setInterval(getDate, 1000);
console.log("Outside interval function");

getDate();

console.log("last statement");
