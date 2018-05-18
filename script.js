$(document).ready(function() {
  var magic8Ball = {};
  magic8Ball.listOfAnswers = [
    "Hell yeah!",
    "The stars say yes",
    "I do believe so",
    "Seems like perhaps",
    "I mean why not",
    "Meh",
    "I guess so",
    "Ehh...",
    "Maybe ask something else",
    "Who do you think you are",
    "Ask a better question",
    "I'm tired, not now",
    "Why ask me?",
    "I don't think so, bro.",
    "You wish",
    "Nah"
  ];
  $("#answer").hide();

  magic8Ball.askQuestion = function(question) {
    $("#8ball").effect("shake");
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png"
    );
    $("#answer").fadeIn(4000);
    var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex];

   
    $("#answer").text(answer);

    console.log(question);
    console.log(answer);

    //$("#answer").fadeIn(4000);
    setTimeout(function() {
      console.log("answer");
    }, 3000);
  };

  var onClick = function() {
    $("#answer").hide();
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"
    );

    setTimeout(function() {
      var question = prompt("Ask a yes or no question!");
      magic8Ball.askQuestion(question);
    }, 500);
  };
  $("#questionButton").click(onClick);
});
