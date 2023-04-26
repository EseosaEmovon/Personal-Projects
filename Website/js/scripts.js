document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  const sendBtn = document.querySelector(".send-btn");
  const successAlert = document.querySelector(".alert-success");
  const errorAlert = document.querySelector(".alert-error");

  sendBtn.addEventListener("click", function () {
    if (
      nameInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      messageInput.value.trim() !== ""
    ) {
      successAlert.style.display = "block";
      errorAlert.style.display = "none";
      setTimeout(function () {
        successAlert.style.display = "none";
      }, 5000);
    } else {
      successAlert.style.display = "none";
      errorAlert.style.display = "block";
      setTimeout(function () {
        errorAlert.style.display = "none";
      }, 5000);
    }
  });
});
