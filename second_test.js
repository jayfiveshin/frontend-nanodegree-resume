var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
  var alphabetized_names = [];
  for (var i in names) {
    array = names[i].split(" ");
    string = array[1] + ", " + array[0];
    alphabetized_names.push(string);
  }
  alphabetized_names.sort();
  return alphabetized_names;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
