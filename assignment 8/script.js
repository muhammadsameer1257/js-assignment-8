let sentence = prompt("Enter a sentence:");
let wordCount = 0;
let isWordStarted = false;


for (let i = 0; i < sentence.length; i++) {
  const item = sentence[i];

  if (item !== ' ') {
    if (!isWordStarted) {
      wordCount++;
      isWordStarted = true;
    }
  } else {
    isWordStarted = false;
  }
}

alert(`Number of words: ${wordCount}`);