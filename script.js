// FAQ: zamykanie innych sekcji po otwarciu jednej
document.addEventListener("DOMContentLoaded", function () {
  const allDetails = document.querySelectorAll("details");

  allDetails.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        allDetails.forEach((el) => {
          if (el !== detail) el.removeAttribute("open");
        });
      }
    });
  });
});
