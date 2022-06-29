const e=document.querySelectorAll(".counter");e.forEach((e=>{const t=()=>{const n=+e.getAttribute("id"),c=+e.innerText,o=n/200;c<n?(e.innerText=Math.ceil(c+o),setTimeout(t,1)):e.innerText=n};t()}));
//# sourceMappingURL=index.4cda8191.js.map
