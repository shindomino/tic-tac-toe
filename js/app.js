// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $(".box").on("click", function () {
    if ($(this).text() === "") {
      $(this).text (turn);
      changeTurn();
    $(this).addClass(turn);
    moves +=1;
    }
  });

  var boxes = $('.box');

  // player "X" always goes first, and player "O" always goes second
  var turn = "X";


  var moves = 0;

  // helper function to reset the game
  var resetGame = function() {
    // reset the board itself
    box.text("");
    box.removeClass("X");
    box.removeClass("O");
  };
  $ ('#restart').on('click', function () {
 console.log("Button got clicked");
 resetGame();
    // reset the variables that track game progress
    turn = "X";
    moves = 0;
  });

  // helper function to change turn to the next player
  var changeTurn = function() {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  };

});

//////
//////
//////

// listen for clicks on each box to play the game
  boxes.on('click', function() {
    // check if this box is already claimed
    if ($(this).text() === "") {

      // box is empty! continue with the turn
      // mark this box
      $(this).text(turn);
      $(this).addClass(turn);
      // increase move counter
      moves += 1;

      // check for a winner
      var winner = getWinner();
      if (winner) {
        // there is a winner!
        // alert the win and reset the game
        alert("You " + winner + " win!");
        resetGame();
      } else if (moves < 9) {
        // there is no winner, yet,
        // but since fewer than 9 moves have been made,
        // there are empty spaces left.  on to the next turn!
        changeTurn();
      } else {
        // there is no winner, and there are no empty spaces
        // alert the result and reset the game
        alert("Draw!");
        resetGame();
      }
    }
  });


// });
