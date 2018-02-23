
var myQuestions = ["What country won the most medals 2014", "Where was the olympics hosted 1992", "What country won most gold medals 2002?"];
var optionsArray = [["Russia", "USA", "Norway"], ["Germany","Spain","France"], ["Italy", "Canada", "Norway"]];
var correctAnswers = ["Russia", "France", "Norway"];
var questionCounter = 0;

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
            
            $("#optionsDIv").empty();
            rightResponse()
            // add one to questionCounter 
            questionCounter++;
            // add one to correct guess
            correctGuess++;
            // start new game. after 5 seconds 
            setTimeout(newGame, 5000);
        }
    });

    //function to show response if image was right. 
    function rightResponse (imgsrc) {
        // create a new img element inside of var 
        var rightShow = $("<img>");
    
        // add class to img
        rightShow.addClass("right-image");
    
        // give img a source to get the image from 
        rightShow.attr("src", "https://media.giphy.com/media/qjfeT5XdAirCg/giphy.gif");

        // inside the options div, show the image 
        $("#optionsDIv").append(rightShow);
    }
    
  

      
console.log(questionCounter);
console.log(correctGuess);


      
    

    
  
}

/*$.each(drinkList, function(number, drink){
        drinkDiv.append("<div>" + drink + "</div>")
      });*/