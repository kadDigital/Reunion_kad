document.addEventListener('DOMContentLoaded', function() {
    const second = document.querySelector('.second-content');
    

    window.addEventListener('scroll', function() {
      const secondTop = second.getBoundingClientRect().top;
      
      if (secondTop < window.innerHeight * 0.4) {
        second.classList.add('visible');
      } else {
        second.classList.remove('visible');
      }

      

 
    });
  });
  
  //text animation
  const animatedText = document.querySelectorAll('.animated-text');
  for (let i = 0; i < animatedText.length; i++) {
      animatedText[i].innerHTML = animatedText[i].innerText.replace(/\S+/g, "<span>$&</span>");
      const spans = animatedText[i].querySelectorAll('span');
      for (let j = 0; j < spans.length; j++) {
          spans[j].style.animationDelay = `${j * 0.5}s`;
      }
  }


  //countdown
const countdownDate = new Date("2023-06-16T00:00:00+08:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // calculate days, hours, minutes and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // update the countdown display
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

// call updateCountdown() every second
setInterval(updateCountdown, 1000);


//navbar and music
const menuuToggle = document.querySelector('.menuToggle');
const audio = document.getElementById("music");
audio.volume = 0.1;
audio.loop = true;

menuuToggle.addEventListener('click', () => {
  if (menuuToggle.classList.contains('active')) {
    audio.pause();
  } else {
    audio.play();
  }
});


let menuToggle = document.querySelector('.menuToggle');

menuToggle.onclick = function () {
  menuToggle.classList.toggle('active')
}


