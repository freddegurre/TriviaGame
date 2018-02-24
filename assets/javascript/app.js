
var myQuestions = ["What country won the most medals 2014", "Where was the olympics hosted 1992", "What country won most gold medals 2002?"];
var optionsArray = [["Russia", "USA", "Norway"], ["Germany","Spain","France"], ["Italy", "Canada", "Norway"]];
var correctAnswers = ["Russia", "France", "Norway"];
var questionCounter = 0;
var rightImgsrc = ["https://media.giphy.com/media/qjfeT5XdAirCg/giphy.gif", "https://media.giphy.com/media/3oD3YooLLYg0AfOPdK/giphy.gif", "https://media.giphy.com/media/3o6EhQhTudJRYRnO5G/giphy.gif"]
var wrongImgsrc = ["https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif", "https://media.giphy.com/media/14q7wE0xIpQfgQ/giphy.gif", "https://media.giphy.com/media/1zSz5MVw4zKg0/giphy.gif"]
var correctGuess = "";
var wrongGuess = "";


$("#start").click(newGame);

function newGame() {
   
    //Empty the options div
    $("#optionsDIv").empty();
    
    //hide the start new game button
    $("#start").hide();
    
    //create a h4 for the question. 
    var question = $("<h4>")
    
    // fill the question variable with the text from myQuestions
    question.text(myQuestions[questionCounter]);
    
    //create a html element of h4 with question var conent inside of the question div. 
    $("#question").html(question);

    for (i = 0; i < optionsArray[questionCounter].length; i++){
        
        // create new elememet inside of the var
        var newP = $("<p>");
        
        // add class option to p element. 
        newP.addClass("option");
       
        // decide what content that is going to be reated inside the new element 
        newP.html(optionsArray[questionCounter][i]);
    
        // This data attribute will be set equal to the array value.
        newP.attr("data-option", optionsArray[questionCounter][i]);
        
        // push the new created content to a parent object in HTML
        $("#optionsDIv").append(newP);
    }

    //when a option is clicked  
    $(".option").on("click", function() {
        //store the data value in choise
        var choise = ($(this).attr("data-option"));
        // if the choise matches give a win. 
        if (choise === correctAnswers[questionCounter]) {
            //clears the options div of options 
            $("#optionsDIv").empty();
            //show status of guess
            guess ("Well done the right answer is ")
            //calls function of right response 
            Response(rightImgsrc[questionCounter]);
            // add one to questionCounter 
            questionCounter++;
            // add one to correct guess
            correctGuess++;
            // next question. after 5 seconds 
            setTimeout(newGame, 5000);
        }
       else if (choise !== correctAnswers[questionCounter]){
            //clears the options div of options
            $("#optionsDIv").empty();
            //show that they guessed wrong
            guess ("Nooo thats wrong! The right answer is ")
            //show image they where wrong 
            Response(wrongImgsrc[questionCounter]);
            // add one to questionCounter 
            questionCounter++;
            // add one to correct guess
            wrongGuess++;
            // next question. after 5 seconds 
            setTimeout(newGame, 5000);
        }
        if (questionCounter === myQuestions.length) {
            // call the result function. 
           result(" Number of Right guess ", " Number of Wrong guess ")
           $("#start").show();
        } 
    
    });

//-------Global-----Functions

    // Show current score
    function result (rightMessage, wrongMessage) {
        //empty the div of current content
       // $("#optionsDIv").empty();
        //store a p in results var
        var results = $("<p>");
        //give css class score to results 
        //results.addClass("score");
        //Show the message for number of right and wrong guess 
        results.html("<p>" + rightMessage +  correctGuess + "</p>" + "<p>" + wrongMessage + wrongGuess +"</p>");
        // push it to the html div
        $("#optionsDIv").append(results);

    }

    // function to show response of guess 
    function guess (string) {
        //show that they guessed wrong
        var answer = $("<h4>")
        // give it the value of the correct answer
        answer.text(string + correctAnswers[questionCounter]);
        // Print a sucsess message!
        $("#question").html(answer);
    }


    //function to show imgae in options div section
    function Response (imgsrc) {

        // create a new img element inside of var 
        var gifShow = $("<img>");
    
        // add class to img
        gifShow.addClass("gif-image");
    
        // give img a source to get the image from 
        gifShow.attr("src", imgsrc);

        // inside the options div, show the image 
        $("#optionsDIv").append(gifShow);
    }
    
  

      
console.log(questionCounter);
console.log(correctGuess);


      
    

    
  
}

/*$.each(drinkList, function(number, drink){
        drinkDiv.append("<div>" + drink + "</div>")
      });*/