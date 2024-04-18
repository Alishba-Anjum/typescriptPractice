function logUntilVowel(str: string): void {
  const vowels = "aeiouAEIOU";
  for (const char of str) {
    if (vowels.includes(char)) {
      console.log(`First vowel found: ${char}`);
      break;
    }
    console.log(char);
  }
}
logUntilVowel("syzygy");
logUntilVowel("ffhga");
