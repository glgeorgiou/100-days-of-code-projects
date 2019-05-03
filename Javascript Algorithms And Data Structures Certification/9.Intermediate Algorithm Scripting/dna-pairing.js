/**
 * https://devdocs.io/javascript/global_objects/array/push
 * https://devdocs.io/javascript/global_objects/string/split
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs, https://en.wikipedia.org/wiki/Base_pair, are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.
 */
function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var paired = [];

    // Function to check with strand to pair.
    var search = function(char) {
      switch (char) {
        case 'A':
          paired.push(['A', 'T']);
          break;
        case 'T':
          paired.push(['T', 'A']);
          break;
        case 'C':
          paired.push(['C', 'G']);
          break;
        case 'G':
          paired.push(['G', 'C']);
          break;
      }
    };

    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
      search(str[i]);
    }

    return paired;
  }

  // test here
  pairElement("GCG");