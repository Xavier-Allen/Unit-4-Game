$(document).ready(function() {

// Creates all global variables needed
var wins;
var losses;
var total;
var target;

// gameStart function that starts the game
function gameStart(){

// Just creates a random number for the crystals
function randomNumberGen (min , max){
    var min = 1;
    var max = 12;
    var randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
    console.log (randomNumber);
    return randomNumber;
}


// creates image element & classes with random numbers attached using jQuery
function imageBttn (url){
    var imageTag = $("<img>");
    imageTag.attr(data-value, randomNumber);
    return imageTag;
}

//FIX THIS!!!!!!
var images = [url1, url2, url3, url4];

//creates the images with the imageTags
for (var i = 0; i < images.length; i++){
    var imageTag = imageBttn (images[i]);
}



//function that creates the target number 
function targetNumber (min, max){
    var min = 19;
    var max = 120;
    var target = Math.floor(Math.random() * (max - min +1)) + min;
    return target;
}

// appends the target number
    var targetDiv = $("#target");
    // var newTarget = target;  I need to fix this! 
    targetDiv.append(target);
}
// END OF gameStart()


// inside (document).ready and outside of gameStart()

    $("<img>").on("click", function() {
          total += imageTagvalue;
    });

    if (total > target){
        document.write("<h1>You Lose!!<h1>");
        losses ++;
        gameStart();

        // I NEED TO FIX LINE 68.
    } else if  (total === target){ 
        document.write("<h1> You Win!!<h1>");
        wins ++;
        gameStart();
    }
});

// // //adds all the numbers on click
// // var total;
// //     $("<img>").on("click", function() {
// //           total += imageTagvalue;
// //     });

// //     if (total > newTarget){
// //         document.write("<h1>You Lose!!<h1>");
// //         losses ++;
// //         gameStart();
// //     } else if  (total === target){
// //         document.write("<h1> You Win!!<h1>");
// //         wins ++;
// //         gameStart();
//     }
