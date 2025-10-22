document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("buy-btn");

  btn.addEventListener("click", () => {
    // prevent double-clicks
    if (btn.classList.contains("loading")) return;

    // start loading
    btn.classList.add("loading");

    // after 2 seconds, show success
    setTimeout(() => {
      btn.classList.add("success");
    }, 2000);

    // after 4 seconds, reset
    setTimeout(() => {
      btn.classList.remove("loading", "success");
    }, 4200);
  });
});
