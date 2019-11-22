let friends = [];

friends = ["Bill", "Ruth", "Jon", "Mike", "Heidi"];
let output = "";
let beginning = " of code in the file, ";
let middleOne = " of code; ";
let middleTwo = " strikes one out, clears it all out, ";
let end = " of code in the file";

window.addEventListener('DOMContentLoaded', function () {
  let btn = document.getElementById('btn');  // This MUST be placed inside of DOMContentLoaded since we're accessing an element that's added in the HMTL. Otherwise, we'll get an error because the button ("btn") can't be found yet.
  btn.addEventListener("click", function () {

    for (let friend of friends) {

      let div = document.createElement('div');
      div.className = "friend";

      let h3 = document.createElement('h3');
      let h3Text = document.createTextNode(friend);
      h3.appendChild(h3Text);  // Append the "friend" to the "h3" element.
      div.appendChild(h3);    // Then, append the "h3" element to the "div" element.
      document.body.appendChild(div);  // Finally, append the "div" to the body of the document.

      for (let j = 99; j > 0; j--) {
        output = j + (lines(j)) + beginning + j + (lines(j)) + middleOne + friend + middleTwo + (j - 1 || 'no more') + lines(j - 1) + end;

        let p = document.createElement('p');
        let pText = document.createTextNode(output);
        p.appendChild(pText);
        div.appendChild(p);
        document.body.appendChild(div);
      }
    }

    function lines(n) {
      return n === 1 ? ' line' : ' lines';
    }
  });
});
