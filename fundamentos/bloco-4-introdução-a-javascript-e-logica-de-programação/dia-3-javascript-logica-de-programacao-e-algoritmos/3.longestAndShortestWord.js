let skills = ["java", "paralelepipedo", "javascript", "python", "html", "css"];
let longest = skills[0];

for (let index = 0; index < skills.length; index += 1) {
  if (skills[index].length > longest.length) {
    longest = skills[index];
  } 
  else {

  }
}

console.log(longest);
