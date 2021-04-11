const splitByPattern = (str, pattern = /\s|_|(?=[A-Z])/) =>
str.split(pattern).filter(Boolean);

function spinalCase(str) {
const newString = splitByPattern(str);
return newString.join('-').toLowerCase();
}

// TESTS
// spinalCase('This Is Spinal Tap');
// spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
// spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
// spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
// spinalCase("AllThe-small Things") should return the string all-the-small-things.