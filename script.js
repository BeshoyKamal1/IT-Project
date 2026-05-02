document.addEventListener("DOMContentLoaded" , function () {
  const btn =
  document.getElementById("themeToggle");
  
  if (btn) {
  btn.onclick = function () {
    document.body.classList.toggle("theme2");
   };
  }
});


