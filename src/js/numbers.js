const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });

  
  let valueDisplays = document.querySelectorAll('.counter');
  let interval = 3500;
  
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-value'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
    // console.log(endValue);
  });
};


const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
  
});




  // const counters = document.querySelectorAll('.num');
  // const speed = 100;
  
  // counters.forEach(counter => {
  //     const animate = () => {
  //         const value = +counter.getAttribute('data-value');
  //         const data = +counter.innerText;
      
  //         const time = value / speed;
  //         if (data < value) {
  //             counter.innerText = Math.ceil(data + time);
  //             setTimeout(animate, 1);
  //           } else {
  //               counter.innerText = value;
  //             }
  //           }
          
  //           animate();
  //         });