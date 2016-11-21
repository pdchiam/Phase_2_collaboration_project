$(".ui-sortable").sortable({ // turns any element and it's decendents into drag and drop objects
    axis:"y", // Sortable objects can only move along the y-axis (up and down)
    cursor:"pointer", // pointer appears when clicking on a sortable object
    items:"> li" // Only child li elements of the sortable element can be dragged and dropped
});

var $q = $(".questions");   // shortening variable for quicker typing
var totalQ = $q.length; // total number of question classes in the DOM
var currentQ = 0;   // variable that represents first question class

$q.hide();  // Hiding all the elements with question class

$($q.get(currentQ)).slideDown(); // Allowing the first Question Class to appear

$("#next").click( function() {   // Listening for a click on an element with id of Next
    $($q.get(currentQ)).fadeOut( function () {   // Fading out current question will start a function that:
        currentQ = currentQ + 1;    // Increases current question to the next one in line
        if (currentQ == totalQ) {   // checks to see if the question is the last question
            alert("Thanks for taking this quiz!");
        } else {
            $($q.get(currentQ)).slideDown();    // If not the last question, then shows next question 
        
        }   // end else
    }); // end fadeOut function
}); // end click function

/****************************************************
 * Jadius:                                          *
 * I want to be able to calculate the value of each *
 * list item after the user clicks on the continue  *
 * button. The Original order of each choice belongs*
 * to it's respective animal. I wonder if the order *
 * of each choice can be randomized so that the     *
 * first choice isn't always a specific animal.     *
 * *************************************************/
 
