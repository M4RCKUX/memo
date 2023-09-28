
// src/helpers/getObjectsFromText.js

let globalId = 0;

const isSymbol = (text) => /(\s+|[,;.!?\-+(){}[\]"'<>:])/.test(text);

const splitText = (text, ratio) =>
  text.split(/(\s+|[,;.!?\-+(){}[\]"'<>:])/).filter(item => item.trim() !== '')
      .reduce((acc, item) => {
        const isHidden = !isSymbol(item) && Math.random() < ratio;
        const lastObject = acc[acc.length - 1];
        if (lastObject && !lastObject.isHidden && !isHidden) {
          lastObject.word += `${isSymbol(item) ? '' : ' '}${item}`;
        } else {
          acc.push({
            id: globalId++,
            word: item,
            isHidden,
            isCorrect: !isHidden,
          });
        }
        return acc;
      }, [])
;

export const getObjectsFromText = (text, ratio) => {
  globalId = 0;
  return text .split(/\r?\n/).filter(line => line.trim() !== '') // split text into lines excluding empty lines
              .map(line => splitText(line, ratio)); // split each line into objects: text and gaps
}

