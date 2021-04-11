const splitByPattern = (str, pattern = /\s|_|(?=[A-Z])/) =>
str.split(pattern).filter(Boolean);

function spinalCase(str) {
const newString = splitByPattern(str);
return newString.join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');