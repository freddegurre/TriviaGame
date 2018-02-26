//----Variables Related to questions, options & answers
var myQuestions = ["What country won the most medals 2014", "Where was the olympics hosted 1992", "What country won most gold medals 2002?","When did mankind invet Curling?"];
var optionsArray = [["Russia", "USA", "Norway"], ["Germany","Spain","France"], ["Italy", "Canada", "Norway"], ["1934", "1787", "1511"]];
var correctAnswers = ["Russia", "France", "Norway", "1511"];
var questionCounter = 0;
//----Variables related to response of answer
var rightImgsrc = ["https://media.giphy.com/media/qjfeT5XdAirCg/giphy.gif", "https://media.giphy.com/media/3oD3YooLLYg0AfOPdK/giphy.gif", "https://media.giphy.com/media/3o6EhQhTudJRYRnO5G/giphy.gif", "https://media.giphy.com/media/xsF1FSDbjguis/giphy.gif"]
var wrongImgsrc = ["https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif", "https://media.giphy.com/media/14q7wE0xIpQfgQ/giphy.gif", "https://media.giphy.com/media/1zSz5MVw4zKg0/giphy.gif","https://media.giphy.com/media/q2VTBpdMEDw64/giphy.gif"]
var correctGuess = 0;
var wrongGuess = 0;

var audio1 = new Audio('Alarm_Clock.mp3');
var audio2 = new Audio('Battle_Crowd_Celebrate_Stutter.mp3');


//----Functions

    function reset (resetGame) {
        correctGuess = 0;
        wrongGuess = 0;
        questionCounter = 0; 
        $("#optionsDIv").empty();
        $("#question").empty();
        $("#start").show();
        $("#wrongGuess").html(wrongGuess);
        $("#rightGuess").html(correctGuess);
    
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


//----Game logic----------------

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
    
    //push the h4 question inseide of questions div in html
    $("#question").html(question);

    for (i = 0; i < optionsArray[questionCounter].length; i++){
        
        // create new elememet inside of the var newP
        var newP = $("<p>");
        
        // add class option to newP element. 
        newP.addClass("option");
       
        // decide what question that is going to be created inside the new element 
        newP.html(optionsArray[questionCounter][i]);
    
        // This data attribute sets the value of the newP to be the answer of the question. 
        newP.attr("data-option", optionsArray[questionCounter][i]);
        
        // push the newP element inseide of optionsDiv in html
        $("#optionsDIv").append(newP);
    }

    //Eventlistener for click on any of the alternatives
    $(".option").on("click", function() {
        //store the data value in choise
        var choise = ($(this).attr("data-option"));
        
        // if the choise matches correct answer 
        if (choise === correctAnswers[questionCounter]) {
            audio2.play();
            
            //clears the options div of alternatives 
            $("#optionsDIv").empty();
            
            //show give feedback to user that they guessed correctly
            guess ("Well done the right answer is ")
            
            //calls function to show show image  
            Response(rightImgsrc[questionCounter]);
            
            // add one 
            questionCounter++;
            correctGuess++;
            $("#rightGuess").html(correctGuess);

            //check if there are more questions
            if (questionCounter === myQuestions.length) {
                //if not then reset game and start on first screen.
                setTimeout(reset, 5000);
            }
            else{
            // next question. after 5 seconds 
            setTimeout(newGame, 5000);
            }
        }
       else if (choise !== correctAnswers[questionCounter]){
            audio1.play();
           
            //clears the options div of alternatives
            $("#optionsDIv").empty();
           
            //show give feedback to user that they guessed correctly 
            guess ("Nooo thats wrong! The right answer is ")
            
            //calls function to show show image  
            Response(wrongImgsrc[questionCounter]);
           
            // add one  
            questionCounter++;
            wrongGuess++;
            $("#wrongGuess").html(wrongGuess);
            
            //check if there are more questions
            if (questionCounter === myQuestions.length) {
                //if not then reset game and start on first screen.
                setTimeout(reset, 5000);
            }
            else{
            // next question. after 5 seconds 
            setTimeout(newGame, 5000);
            }
            
        }
    
    
    });
}

   
    
  

      



      
    

    
  
