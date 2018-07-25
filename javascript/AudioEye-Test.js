'use strict';

/* 
1. Write a function that returns either a letter grade “A” “B” …or "out of range" if it is not a proper grade when a numeric grade is passed in to that function: 
90 - 100 A
80 - 89 B 
72 - 79 C
0 - 71 F 
*/

// Made a function that can return multiple letter grades.
function numberGradeIntoLetterGrade(numberGrade) {
  // Create an object to properly give each number grade a letter grade
  const gradingSystem = {
    // Each key has a function that returns either true of false. We can use this object to figure out number grade corresponds to what letter grade.
    'Out of Range': function(num) {
      return (101 <= num || !Number.isInteger(num));
    },
    A: function(num) {
      return 90 <= num && num <= 100;
    },
    B: function(num) {
      return 80 <= num && num <= 89;
    },
    C: function(num) {
      return 72 <= num && num <= 79;
    },
    F: function(num) {
      return 0 <= num && num <= 71;
    }
  };

  // Get the letters from the gradingSystem
  const letters = (Object.keys(gradingSystem));

  let letterGrade;
  // Go through the letters in the gradingSystem
  letters.some(letter => {
    // If the gradingSystem's key's functions ever return true, set letterGrade to equal the letter
    if (gradingSystem[letter](numberGrade)) {
      return letterGrade = letter;
    }
  });
  
  return letterGrade;
}

// Check to see if the function is working as intended.
console.log(numberGradeIntoLetterGrade(1000));
console.log(numberGradeIntoLetterGrade('a'));
console.log(numberGradeIntoLetterGrade(95));
console.log(numberGradeIntoLetterGrade(85));
console.log(numberGradeIntoLetterGrade(75));
console.log(numberGradeIntoLetterGrade(65));

/*
2. Write JS/JQuery code that sets focus to an anchor tag with id="main" when a button with class="skip" is clicked.
 */

$(document).ready(function(){
  // Find an element with the class name 'skip'.
  $('.skip').on('click', () => {
    // When the element is clicked on, set focus on an anchor tag with the ID 'main'.
    $('a#main').focus();
  });
});


/* 
3. Write JS/JQuery code to give the class“learn” to all links on a page that have the text “learn more”: 
*/

$(document).ready(function(){
  // Find all anchor tags on a page
  $('a').each(function() {
    // If the anchor tag has the words 'learn more', add the class 'learn' to it.
    if ($(this).text().includes('learn more')) {
      $(this).addClass('learn');
    }
  });
});