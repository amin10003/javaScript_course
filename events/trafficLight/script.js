const red = document.getElementById("redLight");
const yellow = document.getElementById("yellowLight");
const green = document.getElementById("greenLight");

function turnOffAll() {
  red.classList.remove("active");
  yellow.classList.remove("active");
  green.classList.remove("active");
}

function startTrafficLight() {
  let state = 0;

  setInterval(() => {
    turnOffAll();

    if (state === 0) {
      red.classList.add("active");
      state = 1;

      // after 4 seconds, switch to yellow
      setTimeout(() => {
        turnOffAll();
        yellow.classList.add("active");
        state = 2;
      }, 4000);

    } else if (state === 2) {
      // after yellow, switch to green
      setTimeout(() => {
        turnOffAll();
        green.classList.add("active");
        state = 3;
      }, 1000);
    } else if (state === 3) {
      // after green, go back to red after 4 seconds
      setTimeout(() => {
        turnOffAll();
        red.classList.add("active");
        state = 1;
      }, 4000);
    }
  }, 1000); // main cycle every 6 seconds
}

// Start the traffic light
startTrafficLight();