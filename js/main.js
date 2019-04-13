let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement(theWordArray, bang) {
  let buildMeUp = ""
  if (bang === undefined) bang = "!";

  for (let i = 0; i < theWordArray.length; i++) {
    /*
        If the current value of `i` divided by 3 has no
        remainder, add an exclamation point to the end of
        the word and then concatenate it to `buildMeUp`.

        Otherwise, just concatenate the word itself.
     */
    buildMeUp += theWordArray[i];
    if ((i + 1) % 3 === 0) {
      buildMeUp += bang + " "
    } else {
      buildMeUp += " "
    }
    // Print buildMeUp to the console
    console.log(buildMeUp);
  }

}

addExcitement(sentence, "?")