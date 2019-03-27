/**
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
 */
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0,num) + '...';
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);