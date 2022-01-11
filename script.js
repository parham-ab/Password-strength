const pass = document.querySelector(".password");
const msg = document.querySelector(".message");
const str = document.querySelector("#strength");
// conditions
pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  if (pass.value.length < 7) {
    str.innerText = "weak";
    pass.style.borderColor = "#ff5925";
    msg.style.color = "#ff5925";
  } else if (pass.value.length >= 7 && pass.value.length < 12) {
    str.innerText = "medium";
    pass.style.borderColor = "yellow";
    msg.style.color = "yellow";
  } else if (pass.value.length >= 12 && pass.value.length < 17) {
    str.innerText = "strong";
    pass.style.borderColor = "#26d730";
    msg.style.color = "#26d730";
  } else if (pass.value.length >= 17) {
    str.innerText = "very strong";
    pass.style.borderColor = "#26d730";
    msg.style.color = "#26d730";
  }
});
