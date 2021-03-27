let practice = 'what does the fox say'

function jazzify(sentence) {
  let words = sentence.split(' ');
  for (const index in words) {
    words[index] = `${words[index]}🤗`;
  }
  return words.join(' ');
}

console.log(jazzify(practice))
