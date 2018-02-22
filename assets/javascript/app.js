
var question1 = {"Who is the best person?": "Fredrik"}
var options1 = ["Fredrik", "Niklas", "Erik", "Gustaf"]

$("#start").click(newGame);

function newGame() {
    var question = $("<h4>")
    question.text(question1);
    $("#question").html(question);

    for (var i = 0; i < answers.length; i++){
        var choises = $("<span>");
        choises.text(answers[i]);
        $("#answers").append(choises);
    }

    
}