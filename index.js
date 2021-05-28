const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {  
  return tutorials.map(string => {
    let words = string.split(" ");
    let casedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1) );
    
    return casedWords.join(" ")
  })
  
}


// function titleCased(tutorials) {
//   const casedWords = tutorials.map(string);
//   const toTitleCased = casedWords.map(function(word){
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ;
//   });
//   console.log ("CONSOLELOG", toTitleCased)
//   return toTitleCased;
// }