export const sentenceCase = (text: string): string => {
  let start = 0;
  const sentences = [...text].reduce((result: string[], char, index, array) => {
    if ([".", "?", "!"].indexOf(char) > -1 || index === array.length - 1) {
      result.push(text.slice(start, index + 1));
      start = index + 1;
    }
    return result;
  }, []);

  let result = sentences
    .map((sentence) => {
      let isFirstLetterUpper = false;
      return [...sentence]
        .map((char) => {
          if (char === "\n") {
            return char;
          } else {
            if (isFirstLetterUpper) {
              return char.toLowerCase();
            } else {
              isFirstLetterUpper = true;
              return char.toUpperCase();
            }
          }
        })
        .join("");
    })
    .join("");

  result = result.replace(/i'/g, `I'`);
  return result;
};

export const capitalizedCase = (text: string): string => {
  return text
    .split(" ")
    .map((word) =>
      [...word]
        .map((letter, index) =>
          index === 0 ? letter.toUpperCase() : letter.toLowerCase()
        )
        .join("")
    )
    .join(" ");
};
