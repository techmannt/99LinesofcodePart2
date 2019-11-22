let friends = [];

friends = ["Bill", "Ruth", "Jon", "Mike", "Heidi"];
let output = "";
let beginning = " of code in the file, ";
let middleOne = " of code; ";
let middleTwo = " strikes one out, clears it all out, ";
let end = " of code in the file";

for (let friend of friends) {
  console.log(friend.toUpperCase());
  for (let j = 99; j > 0; j--) {
    output = j + (lines(j)) + beginning + j + (lines(j)) + middleOne + friend + middleTwo + (j - 1 || 'no more') + lines(j - 1) + end;
    console.log(output);
  }
}

function lines(n) {
  return n === 1 ? ' line' : ' lines';
}
