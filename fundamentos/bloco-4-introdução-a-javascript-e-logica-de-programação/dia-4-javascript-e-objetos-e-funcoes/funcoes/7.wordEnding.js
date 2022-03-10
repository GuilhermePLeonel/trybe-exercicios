function wordEnding(word, ending) {
  

  if (
    word[word.length - 2] === ending[0] &&
    word[word.length - 1] === ending[1]
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(wordEnding('corsa','sa'));