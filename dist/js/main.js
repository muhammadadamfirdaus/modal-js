function modal(e){const o=document.querySelector(".modal");o&&(console.log("modal"),window.addEventListener("click",function(e){if(e.target.closest(".button-modal"))console.log("di dalam"),o.classList.contains("active")?o.classList.remove("active"):o.classList.add("active");else if(e.target.closest(".modal.media")){if(console.log("di dalam"),!e.target.closest(".button.close"))return;o.classList.remove("active")}else console.log("di luar"),o.classList.remove("active")}))}