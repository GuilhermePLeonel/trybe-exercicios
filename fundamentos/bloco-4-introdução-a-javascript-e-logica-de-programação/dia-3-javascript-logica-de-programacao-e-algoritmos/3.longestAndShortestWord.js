//  LongestWord

let skills = ["java", "paralelepipedo", "javascript", "python", "html", "css"];
let longest = skills[0];

for (let index = 0; index < skills.length; index += 1) {
  if (skills[index].length > longest.length) {
    longest = skills[index];
  } 
  else {

  }
}

console.log("The longest word is:" + " " + longest);



// ShortestWord


let shortest = skills[0];

for (let index = 0; index < skills.length; index += 1) {
  if (skills[index].length < shortest.length) {
    shortest = skills[index];
  } 
  else {

  }
}

console.log("The shortest word is:" + " " + shortest);