function isPalindrome(string) {
    const sanitized = string.toLowerCase().match(/[a-z0-9]/g, '');
    return sanitized.join('') === sanitized.reverse().join('');
}

// spread operator and reverse() will reverse your string every whitespace, so you dont need loop the string inside array of reversed string just join it instead.

console.log(
  isPalindrome("Sator Arepo Tenet Opera Rotas."), // true
  isPalindrome("Aku suka rajawali, bapak. Apabila wajar, aku suka."), // true
  isPalindrome("Kasur ini rusak."), // true
  isPalindrome("Tasupi dan Tika sama-sama sakit nadi pusat."), // true
  isPalindrome("Pada hari minggu, apakah aku turut ayah ke kota?") // false
);