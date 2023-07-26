function countUniqueCharacters(text) {
  const charSet = new Set(text);
  return charSet.size;
}

function handleCountButtonClick() {
  const inputText = document.getElementById("inputText").value;
  const uniqueCharCount = countUniqueCharacters(inputText);
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Unique Character Count : ${uniqueCharCount}`;
}

const countButton = document.getElementById("countButton");
countButton.addEventListener("click", handleCountButtonClick);
