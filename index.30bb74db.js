var counters=document.querySelectorAll(".counter"),speed=200;counters.forEach((function(e){var t=function(){var n=+e.getAttribute("id"),r=+e.innerText,c=n/speed;r<n?(e.innerText=Math.ceil(r+c),setTimeout(t,1)):e.innerText=n};t()}));
//# sourceMappingURL=index.30bb74db.js.map
