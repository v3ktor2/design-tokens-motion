document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("buy-btn");

  btn.addEventListener("click", () => {
    if (btn.classList.contains("loading")) return;

    btn.classList.add("loading");

    setTimeout(() => {
      btn.classList.add("success");
    }, 2000);

    setTimeout(() => {
      btn.classList.remove("loading","success");
    }, 4200);
  });
});
