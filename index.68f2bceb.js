!function(){var t=new IntersectionObserver((function(t,e){t.forEach((function(t){t.target.classList.toggle("is-inViewport",t.isIntersecting)}));var n=document.querySelectorAll(".counter");n.forEach((function(t){var e=0,n=parseInt(t.getAttribute("data-value")),r=Math.floor(3500/n),o=setInterval((function(){e+=1,t.textContent=e,e==n&&clearInterval(o)}),r)}))})),e={};document.querySelectorAll("[data-inviewport]").forEach((function(n){t.observe(n,e)}))}();
//# sourceMappingURL=index.68f2bceb.js.map
