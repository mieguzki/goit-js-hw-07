
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
    const trimmedValue = nameInput.value.trim();
  
    if (trimmedValue === "") {
        nameOutput.textContent = "Anonymous";
    } else {
      nameOutput.textContent = trimmedValue;
    }
  });