document.getElementById("check").onclick = function () {
  let getInput = document.getElementById("getInput").value;

  try {
    isPalindromeBuiltIn(getInput);
    isPalindrome(getInput);
  } catch (err) {
    console.error(err.message);
  }
};

function isPalindromeBuiltIn(string) {
  const sanitized = string.toLowerCase().match(/[a-z0-9]/g, "");
  return sanitized.join("") === sanitized.reverse().join("")
    ? alert("It is a palindrome. (Built In Function)")
    : alert("It is not a palindrome. (Built In Function)");
}
// spread operator and reverse() will reverse your string every whitespace, so you dont need loop the string inside array of reversed string just join it instead.

function isPalindrome(string) {
  // find the length of a string
  const lenghtOfString = string.length;

  // loop
  for (let reverseChar = 0; reverseChar < lenghtOfString / 2; reverseChar++) {
    // check if first and last string are same
    if (string[reverseChar] !== string[lenghtOfString - 1 - reverseChar]) {
      return alert("It is not a palindrome");
    }
  }
  return alert("It is a palindrome");
}

// console.log(
//   isPalindrome("Sator Arepo Tenet Opera Rotas."), // true
//   isPalindrome("Aku suka rajawali, bapak. Apabila wajar, aku suka."), // true
//   isPalindrome("Kasur ini rusak."), // true
//   isPalindrome("Tasupi dan Tika sama-sama sakit nadi pusat."), // true
//   isPalindrome("Pada hari minggu, apakah aku turut ayah ke kota?") // false
// );
